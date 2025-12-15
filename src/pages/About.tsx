import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const About = () => {
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
                  item.path === '/about' 
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Icon name="Building2" className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              О компании
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ООО «СибЭко» — ведущая специализированная организация Кузбасса с 1996 года
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl mb-16 animate-scale-in border border-slate-200/60">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Компания работает с 1996 года и является одной из ведущих специализированных организаций Кузбасса. 
                Мы специализируемся на проектном и экологическом направлениях, проведении эколого-правовой оценки 
                хозяйственной деятельности и экологическом аудите.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Наши работы выполняются «под ключ» — от инженерных изысканий и разработки проекта до согласования 
                в контрольных органах и получения положительных заключений экспертиз.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'Users',
                title: 'Высококвалифицированный персонал',
                description: 'Команда профессионалов с многолетним опытом работы в области экологического проектирования и консалтинга',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'Zap',
                title: 'Решение нестандартных задач',
                description: 'Умение находить эффективные решения для сложных и нестандартных проектов любой сложности',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'CheckCircle',
                title: 'Соблюдение сроков',
                description: 'Гарантированное выполнение работ точно в установленные сроки с высоким качеством',
                gradient: 'from-emerald-500 to-teal-500'
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="border-2 border-slate-200/60 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-fade-in-up bg-white"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 mb-5 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl animate-fade-in">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '28+', label: 'Лет на рынке', icon: 'Calendar' },
                { number: '500+', label: 'Реализованных проектов', icon: 'FolderCheck' },
                { number: '100%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
                { number: '24/7', label: 'Поддержка клиентов', icon: 'Headphones' },
              ].map((stat, idx) => (
                <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-10 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Icon name="Leaf" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">СибЭко</span>
          </div>
          <p className="text-slate-400 mb-2">Экологическое проектирование и консалтинг с 1996 года</p>
          <p className="text-slate-500">© 2024 ООО «СибЭко». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
