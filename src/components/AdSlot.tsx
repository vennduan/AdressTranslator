interface AdSlotProps {
  className?: string
  position?: 'header' | 'sidebar' | 'content' | 'in-article' | 'footer'
  slotId?: string
}

/**
 * AdSlot Component - AdSense广告位占位符
 *
 * 使用说明：
 * - 在部署前，请替换 slotId 为您的AdSense广告单元ID
 * - 目前使用占位符显示，方便您预览广告位置
 * - 集成AdSense后，取消注释下面Google AdSense相关代码
 *
 * 广告位置建议：
 * - header: 页眉横幅广告（728x90）
 * - sidebar: 侧边栏广告（300x250）
 * - content: 内容区域广告（336x280）
 * - in-article: 文章内嵌广告（728x90）
 * - footer: 页脚广告（responsive）
 *
 * AdSense合规要求：
 * 1. 必须有隐私政策页面
 * 2. 明确标注"广告"字样（自动显示）
 * 3. 不得投放违规内容
 * 4. 等待流量稳定后再投放
 */

function AdSlot({ className = '', position = 'content', slotId = 'ad-placeholder' }: AdSlotProps) {
  // 获取广告尺寸样式
  const getAdSize = (position: string) => {
    switch (position) {
      case 'header':
        return 'max-w-[728px] h-[90px]'
      case 'sidebar':
        return 'max-w-[300px] h-[250px]'
      case 'content':
        return 'max-w-[336px] h-[280px]'
      case 'in-article':
        return 'max-w-[728px] h-[90px]'
      case 'footer':
        return 'w-full h-[90px]'
      default:
        return 'max-w-[336px] h-[280px]'
    }
  }

  // 禁用广告时的占位符样式
  return (
    <div className={`ad-container my-4 ${className}`}>
      {/* AdSense广告脚本 - 部署时取消注释 */}
      {/*
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-YOUR_CLIENT_ID"
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        <script dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
        }} />
      */}

      {/* 当前显示的占位符 - 实际部署时可移除或替换为真实广告 */}
      <div
        className={`
          ${getAdSize(position)} w-full
          bg-gradient-to-br from-slate-100/50 to-slate-200/50
          dark:from-zinc-800/50 dark:to-zinc-900/50
          border-2 border-dashed border-slate-300/50 dark:border-zinc-700/50
          rounded-xl flex items-center justify-center
          text-slate-500 dark:text-slate-400 text-sm
          transition-all duration-200 hover:opacity-80
        `}
      >
        <div className="text-center px-4">
          <p className="font-medium mb-1">广告位 {slotId}</p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {position === 'header' && '728x90 横幅广告'}
            {position === 'sidebar' && '300x250 矩形广告'}
            {position === 'content' && '336x280 矩形广告'}
            {position === 'in-article' && '728x90 横幅广告'}
            {position === 'footer' && '响应式 页脚广告'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdSlot
