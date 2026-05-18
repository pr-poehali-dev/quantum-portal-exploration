import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a0f1e] to-[#1a2a1a] flex flex-col">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,80,30,0.35),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,60,20,0.2),transparent_60%)]"></div>

      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/33426f1b-03e9-45fc-8780-2210801def96/files/b67737fe-e453-4e3a-8a70-408b83aae7c5.jpg')" }}
      ></div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight">
              🔥 БаняМобиль
            </Link>
            <nav className="hidden ml-12 space-x-8 md:flex">
              {["Модели", "Комплектации", "Доставка", "Цены", "Отзывы", "Контакты"].map((item, index) => (
                <Link
                  key={item}
                  to={`/${["models", "options", "delivery", "pricing", "reviews", "contacts"][index]}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm">
              <Icon name="Phone" size={16} />
              8 (800) 123-45-67
            </a>
            <Link to="/order" className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-600 transition-colors text-sm font-medium">
              Заказать баню
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12 mx-auto text-center max-w-7xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-green-900/40 border border-green-700/50 text-green-400 text-sm">
          <Icon name="Truck" size={14} />
          Доставка по всей России
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
          Мобильные бани —<br />
          <span className="text-green-400">баня там, где ты</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
          Готовые бани на колёсах собственного производства.<br />
          Приедем, установим и вы попаритесь уже в этот weekend.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">
          {[
            { value: "500+", label: "бань продано" },
            { value: "5 лет", label: "на рынке" },
            { value: "48ч", label: "доставка" },
            { value: "3 года", label: "гарантия" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/catalog"
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Link>
          <Link
            to="/order"
            className="px-8 py-3 text-lg font-medium text-white bg-green-700 rounded-md hover:bg-green-600 transition-colors"
          >
            Получить расчёт стоимости
          </Link>
        </div>

        {/* Trust Section */}
        <div className="w-full mt-24">
          <p className="mb-8 text-gray-400">
            Нас выбирают <span className="text-white">дачники, турбазы</span>, санатории и
            корпоративные клиенты по всей России
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { icon: "Shield", label: "ГОСТ качество" },
              { icon: "Flame", label: "Финская технология" },
              { icon: "TreePine", label: "Кедр и липа" },
              { icon: "Star", label: "4.9 / 5.0 рейтинг" },
              { icon: "Wrench", label: "Сервис 24/7" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Icon name={item.icon} fallback="Star" size={24} />
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;