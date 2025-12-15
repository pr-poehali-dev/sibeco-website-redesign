import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200/60 shadow-lg shadow-slate-200/30">
        <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 group">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Icon name="Leaf" className="text-white" size={26} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              СибЭко
            </span>
          </button>
          <div className="hidden md:flex gap-8">
            {[
              { path: '/', label: 'Главная' },
              { path: '/about', label: 'О компании' },
              { path: '/services', label: 'Услуги' },
              { path: '/contact', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-base font-semibold transition-all duration-300 ${
                  item.path === '/' 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button 
            onClick={() => navigate('/contact')} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Связаться с нами
          </Button>
        </nav>
      </header>

      <section className="pt-36 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Icon name="Award" className="text-blue-600" size={20} />
                <span className="text-blue-700 font-semibold text-sm">С 1996 года на рынке</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight">
                Экологическое{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  проектирование
                </span>
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed">
                Ведущая специализированная организация Кузбасса. Работы «под ключ» — от инженерных изысканий до получения положительных заключений экспертиз.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/services')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-7 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Наши услуги
                  <Icon name="ArrowRight" className="ml-2" size={22} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => navigate('/about')}
                  className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 text-lg px-8 py-7 transition-all duration-300"
                >
                  О компании
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-3xl rounded-full"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-slate-200/60">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: 'Award', label: 'Высокая квалификация', gradient: 'from-blue-600 to-cyan-600' },
                    { icon: 'Clock', label: 'Соблюдение сроков', gradient: 'from-purple-600 to-pink-600' },
                    { icon: 'Lightbulb', label: 'Нестандартные решения', gradient: 'from-emerald-600 to-teal-600' },
                    { icon: 'Shield', label: 'Полное согласование', gradient: 'from-orange-600 to-red-600' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer group"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={item.icon as any} className="text-white" size={36} />
                      </div>
                      <p className="font-bold text-slate-900 text-base">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-slate-900">Почему выбирают нас</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Профессиональный подход и многолетний опыт работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: 'Users',
                title: 'Квалифицированный персонал',
                description: 'Команда профессионалов с многолетним опытом в области экологического проектирования',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                icon: 'Zap',
                title: 'Нестандартные задачи',
                description: 'Умение решать сложные и нестандартные задачи любой сложности',
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                icon: 'CheckCircle',
                title: 'Точные сроки',
                description: 'Гарантированное выполнение работ в установленные сроки',
                gradient: 'from-emerald-600 to-teal-600'
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="border-2 border-slate-200/60 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-fade-in-up bg-white group"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <CardHeader>
                  <div className={`w-20 h-20 mb-5 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon as any} className="text-white" size={36} />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-slate-900">Наши направления</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр услуг в области экологии и проектирования
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: 'FileText',
                title: 'Проектное направление',
                description: 'Проектно-сметная документация, техническая документация, проекты рекультивации',
                gradient: 'from-blue-600 to-cyan-600',
                path: '/services'
              },
              {
                icon: 'Leaf',
                title: 'Экологическое направление',
                description: 'Экологическое проектирование, нормирование, сопровождение и консалтинг',
                gradient: 'from-purple-600 to-pink-600',
                path: '/services'
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                onClick={() => navigate(item.path)}
                className="border-2 border-slate-200/60 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl cursor-pointer animate-fade-in-up bg-white group overflow-hidden"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full"></div>
                <CardHeader className="relative">
                  <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon as any} className="text-white" size={36} />
                  </div>
                  <CardTitle className="text-3xl text-slate-900 mb-3">{item.title}</CardTitle>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-purple-600 text-lg font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto max-w-6xl text-center text-white animate-fade-in">
          <h2 className="text-5xl font-bold mb-8">Готовы начать проект?</h2>
          <p className="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами для консультации по вашему проекту
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Оставить заявку
              <Icon name="Send" className="ml-2" size={22} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/services')}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 transition-all duration-300"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Leaf" className="text-white" size={28} />
                </div>
                <span className="text-3xl font-bold">СибЭко</span>
              </div>
              <p className="text-slate-400 text-base">Экологическое проектирование и консалтинг с 1996 года</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-5">Навигация</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Главная', path: '/' },
                  { label: 'О компании', path: '/about' },
                  { label: 'Услуги', path: '/services' },
                  { label: 'Контакты', path: '/contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => navigate(item.path)}
                      className="text-slate-400 hover:text-white transition-colors text-base"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-5">Услуги</h4>
              <ul className="space-y-3 text-slate-400 text-base">
                <li>Проектирование</li>
                <li>Экология</li>
                <li>Консалтинг</li>
                <li>Нормирование</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-5">Контакты</h4>
              <ul className="space-y-3 text-slate-400 text-base">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Кемерово
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (3842) XX-XX-XX
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@sibeco.pro
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2024 ООО «СибЭко». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
