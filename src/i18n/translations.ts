export interface Translations {
  app: {
    title: string;
    subtitle: string;
  };
  translation: {
    inputPlaceholder: string;
    outputPlaceholder: string;
    chinese: string;
    english: string;
    switchLanguages: string;
    translate: string;
    processing: string;
    dataProcessingNotice: string;
  };
  buttons: {
    batchTranslate: string;
    manualTranslate: string;
    backToHome: string;
    close: string;
  };
  modals: {
    batch: {
      title: string;
      description: string;
      wechat: string;
      addWechat: string;
    };
    manual: {
      title: string;
      description: string;
      wechat: string;
      addWechat: string;
      contactInfo: string;
    };
  };
  errors: {
    translationFailed: string;
  };
  tips: {
    translationTips: string;
  };
}

export const translations: Record<'zh' | 'en', Translations> = {
  zh: {
    app: {
      title: '地址翻译器',
      subtitle: 'AI智能翻译 · 跨境电商物流必备 · 安全隐私保护'
    },
    translation: {
      inputPlaceholder: '输入中文地址...',
      outputPlaceholder: 'English translation...',
      chinese: '中文',
      english: 'English',
      switchLanguages: '切换语言',
      translate: '翻译',
      processing: '翻译中...',
      dataProcessingNotice: '通过AI即时翻译，无数据存储，保护您的数据安全！'
    },
    buttons: {
      batchTranslate: '批量翻译',
      manualTranslate: '人工翻译',
      backToHome: '返回首页',
      close: '关闭'
    },
    modals: {
      batch: {
        title: '批量翻译功能开发中',
        description: '支持 Excel/CSV 文件上传，一次性翻译多个地址，大幅提升工作效率！',
        wechat: '扫码添加微信',
        addWechat: '添加微信'
      },
      manual: {
        title: '人工翻译服务',
        description: '复杂地址格式？需要专业审核？添加微信，为您提供专业人工翻译服务！',
        wechat: '扫码添加微信',
        addWechat: '添加微信',
        contactInfo: '告诉我你的地址翻译需求，我会尽快处理'
      }
    },
    errors: {
      translationFailed: '翻译失败，请重试'
    },
    tips: {
      translationTips: '服务器仅做临时中转，通过严格规范格式，海量数据训练的AI即时翻译，无存储动作，保护您的数据安全！'
    }
  },
  en: {
    app: {
      title: 'Address Translator',
      subtitle: 'AI Translation · Essential for Logistics · Privacy Protection'
    },
    translation: {
      inputPlaceholder: 'Enter English address...',
      outputPlaceholder: '中文翻译...',
      chinese: 'Chinese',
      english: 'English',
      switchLanguages: 'Switch Languages',
      translate: 'Translate',
      processing: 'Translating...',
      dataProcessingNotice: 'AI-powered translation with no data storage. Your privacy is protected!'
    },
    buttons: {
      batchTranslate: 'Batch Translate',
      manualTranslate: 'Manual Service',
      backToHome: 'Back to Home',
      close: 'Close'
    },
    modals: {
      batch: {
        title: 'Batch Translation Coming Soon',
        description: 'Support Excel/CSV file upload to translate multiple addresses at once, greatly improving work efficiency!',
        wechat: 'Scan to add WeChat',
        addWechat: 'Add WeChat'
      },
      manual: {
        title: 'Manual Translation Service',
        description: 'Complex address formats? Need professional review? Add WeChat for professional manual translation services!',
        wechat: 'Scan to add WeChat',
        addWechat: 'Add WeChat',
        contactInfo: 'Tell me your address translation needs and I will process them as soon as possible'
      }
    },
    errors: {
      translationFailed: 'Translation failed. Please try again.'
    },
    tips: {
      translationTips: 'The server only does the relay, and the AI translation is done through the standardized format, no storage action, protecting your data security!'
    }
  }
};
