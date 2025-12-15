import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Services = () => {
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
                  item.path === '/services' 
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
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Icon name="Briefcase" className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Наши услуги
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Полный спектр услуг в области экологического проектирования и консалтинга
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="border-2 border-slate-200/60 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl animate-fade-in-up bg-white overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <CardHeader className="relative">
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon name="FileText" className="text-white" size={36} />
                </div>
                <CardTitle className="text-3xl text-slate-900">Проектное направление</CardTitle>
                <CardDescription className="text-lg text-slate-600">Полный цикл проектных работ под ключ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  {
                    title: 'Проектно-сметная документация',
                    desc: 'Разработка для различных видов объектов капитального строительства, включая линейные объекты'
                  },
                  {
                    title: 'Техническая документация',
                    desc: 'Проекты, позволяющие использовать накопленные отходы V класса опасности как вторичные материальные ресурсы'
                  },
                  {
                    title: 'Проекты рекультивации',
                    desc: 'Устранение последствий загрязнения почвы и восстановление плодородного слоя нарушенных земель'
                  }
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform shadow-md">
                      <Icon name="Check" className="text-white" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-lg">{service.title}</h4>
                      <p className="text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200/60 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl animate-fade-in-up bg-white overflow-hidden group" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
              <CardHeader className="relative">
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Leaf" className="text-white" size={36} />
                </div>
                <CardTitle className="text-3xl text-slate-900">Экологическое направление</CardTitle>
                <CardDescription className="text-lg text-slate-600">Комплексные экологические услуги</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  {
                    title: 'Экологическое проектирование',
                    desc: 'Работы регламентированы ФЗ от 10.01.2002 № 7-ФЗ «Об охране окружающей среды»'
                  },
                  {
                    title: 'Экологическое нормирование',
                    desc: 'Разработка проектов нормативов допустимого воздействия: КЭР, ПНООЛР, ПДВ, НДС'
                  },
                  {
                    title: 'Экологическое сопровождение',
                    desc: 'Комплексный консалтинг и поддержка на всех этапах реализации проектов'
                  }
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-purple-50 transition-all duration-300 group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform shadow-md">
                      <Icon name="Check" className="text-white" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-lg">{service.title}</h4>
                      <p className="text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4">Полный цикл работ под ключ</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                От инженерных изысканий до получения положительных заключений экспертиз
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: 'Compass', title: 'Инженерные изыскания', step: '01' },
                { icon: 'PenTool', title: 'Разработка проекта', step: '02' },
                { icon: 'FileCheck', title: 'Согласование', step: '03' },
                { icon: 'Award', title: 'Экспертиза', step: '04' },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-white/20 mb-3">{item.step}</div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
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

export default Services;
