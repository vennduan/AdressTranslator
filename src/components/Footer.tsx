const Footer = () => {
  return (
    <footer className="py-4 mt-auto border-t border-slate-200/50 dark:border-zinc-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          {/* 透明度、隐私政策和服务条款链接 */}
          <div className="flex items-center gap-3 text-sm">
            <a
              href="/transparency"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              AI Transparency
            </a>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <a
              href="/privacy"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <a
              href="/terms"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* 版权信息 */}
          <div className="text-center">
            <span className="text-xs text-slate-600 dark:text-slate-300">
              &copy; {new Date().getFullYear()} transadd. All rights reserved. Made with ❤️ by <a
                href="https://github.com/vennduan/AdressTranslator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                venn
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
