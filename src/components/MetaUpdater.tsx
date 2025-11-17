import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from '../i18n/translations';
import { useLanguage } from '../contexts/LanguageContext';

interface MetaUpdaterProps {
  customTitle?: string;
  customDescription?: string;
}

const routeMeta = {
  '/': {
    zh: {
      title: '地址翻译器 · 中英文地址格式转换 | 跨境电商必备工具',
      description: '安全、快速、免费的地址翻译工具。所有数据仅在本地处理，不上传服务器。支持中英文地址双向翻译，保护您的隐私。跨境电商物流必备工具。'
    },
    en: {
      title: 'Address Translator · AI-Powered Address Format Conversion | Cross-Border E-commerce Tool',
      description: 'Free, secure address translation tool. Data processed locally, never uploaded to server. Supports Chinese-English bidirectional translation with privacy protection.'
    }
  },
  '/privacy': {
    zh: {
      title: '隐私政策 | 地址翻译器',
      description: '了解我们如何保护您的数据隐私。所有翻译数据仅在本地处理，不上传服务器。'
    },
    en: {
      title: 'Privacy Policy | Address Translator',
      description: 'Learn how we protect your data privacy. All translation data is processed locally and never uploaded to servers.'
    }
  },
  '/terms': {
    zh: {
      title: '服务条款 | 地址翻译器',
      description: '使用地址翻译器的服务条款和条件。'
    },
    en: {
      title: 'Terms of Service | Address Translator',
      description: 'Terms and conditions for using the Address Translator service.'
    }
  },
  '/transparency': {
    zh: {
      title: 'AI透明度说明 | 地址翻译器',
      description: '了解我们的AI翻译技术如何工作，以及我们如何确保翻译质量和数据安全。'
    },
    en: {
      title: 'AI Transparency | Address Translator',
      description: 'Learn how our AI translation technology works and how we ensure translation quality and data security.'
    }
  }
};

function MetaUpdater({ customTitle, customDescription }: MetaUpdaterProps) {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const meta = routeMeta[pathname as keyof typeof routeMeta]?.[language] || {
      title: translations[language].app.title,
      description: translations.zh === translations[language]
        ? '安全、快速、免费的地址翻译工具。所有数据仅在本地处理，不上传服务器。'
        : 'Free, secure address translation tool. Data processed locally, never uploaded to server.'
    };

    const title = customTitle || meta.title;
    const description = customDescription || meta.description;

    // 更新页面标题
    document.title = title;

    // 更新或创建meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 更新 Open Graph title 和 description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);

    // 根据语言更新 html lang 属性
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  }, [routeName, customTitle, customDescription, language]);

  return null;
}

export default MetaUpdater;
