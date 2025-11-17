import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AITransparency from './pages/AITransparency';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';

const AppRouter = () => {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/transparency" element={<AITransparency />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
};

export default AppRouter;