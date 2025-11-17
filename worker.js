/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
    async fetch(request, env) {
      // 允许的域名（根据你的前端域名修改）
      const allowedOrigin = "*";
  
      // 设置 CORS 头
      const corsHeaders = {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      };
  
      // 如果是预检请求（OPTIONS），直接返回 CORS 头
      if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
      }
  
      // Mistral AI 的 API 端点和 API 密钥
      const MISTRAL_API_URL = "https://api.mistral.ai/v1/agents/completions";
      const MISTRAL_API_KEY = env.MISTRAL_API_KEY; // 使用环境变量存储 API 密钥
  
      // 解析客户端请求体
      let requestBody;
      try {
        requestBody = await request.json();
      } catch (err) {
        return new Response("Invalid JSON body", { status: 400, headers: corsHeaders });
      }
  
      // 检查 messages 是否存在
      if (!requestBody.messages) {
        return new Response("Missing messages field", { status: 400, headers: corsHeaders });
      }
  
      // 将 messages 转换为 Mistral AI 所需的格式
      let messages = Array.isArray(requestBody.messages)
        ? requestBody.messages // 如果已经是数组，直接使用
        : [
          {
            role: "user",
            content:
              requestBody.messages +
              (requestBody.translateType === "cn2en"
                ? "please translate to English address"
                : "please translate to Chinese address"),
          },
        ]; // 如果是字符串，转换为数组并添加翻译指令
      // 构造 Mistral AI 的请求体
      const mistralRequestBody = {
        agent_id: env.API_ID, // 从环境变量中获取 agent_id
        messages: messages, // 使用转换后的 messages
      };
  
      // 发送请求到 Mistral AI
      const mistralResponse = await fetch(MISTRAL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${MISTRAL_API_KEY}`,
        },
        body: JSON.stringify(mistralRequestBody),
      });
  
      // 检查 Mistral AI 的响应是否成功
      if (!mistralResponse.ok) {
        return new Response("Failed to call Mistral AI API", {
          status: mistralResponse.status,
          headers: corsHeaders,
        });
      }
  
      // 解析 Mistral AI 的响应
      const mistralResponseData = await mistralResponse.json();
  
      // 返回 Mistral AI 的响应给客户端
      return new Response(JSON.stringify(mistralResponseData), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders, // 添加 CORS 头
        },
      });
    },
  };