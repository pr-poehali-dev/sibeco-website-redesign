import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Leaf" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СибЭко
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            {['about', 'services', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
              >
                {section === 'about' && 'О компании'}
                {section === 'services' && 'Услуги'}
                {section === 'blog' && 'Блог'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105">
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
                С 1996 года на рынке
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Экологическое проектирование и консалтинг
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ведущая специализированная организация Кузбасса. Работы «под ключ» — от инженерных изысканий до получения положительных заключений экспертиз.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 text-lg"
                >
                  Наши услуги
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-lg"
                >
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: 'Award', label: 'Высокая квалификация', color: 'from-primary to-purple-600' },
                    { icon: 'Clock', label: 'Соблюдение сроков', color: 'from-secondary to-orange-600' },
                    { icon: 'Lightbulb', label: 'Нестандартные решения', color: 'from-accent to-blue-600' },
                    { icon: 'Shield', label: 'Полное согласование', color: 'from-primary to-secondary' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-orange-50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center`}>
                        <Icon name={item.icon as any} className="text-white" size={32} />
                      </div>
                      <p className="font-semibold text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              О нас
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ООО «СибЭко»</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Одна из ведущих специализированных организаций Кузбасса с 1996 года
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Users',
                title: 'Высококвалифицированный персонал',
                description: 'Команда профессионалов с многолетним опытом в области экологического проектирования',
                color: 'from-primary to-purple-600'
              },
              {
                icon: 'Zap',
                title: 'Нестандартные задачи',
                description: 'Умение решать сложные и нестандартные задачи любой сложности',
                color: 'from-secondary to-orange-600'
              },
              {
                icon: 'CheckCircle',
                title: 'Соблюдение сроков',
                description: 'Гарантированное выполнение работ в установленные сроки',
                color: 'from-accent to-blue-600'
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center`}>
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр услуг в области экологического проектирования и консалтинга
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl animate-fade-in-up bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                  <Icon name="FileText" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Проектное направление</CardTitle>
                <CardDescription className="text-base">Полный цикл проектных работ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Проектно-сметная документация для объектов капитального строительства',
                  'Техническая документация для использования отходов V класса как вторичных ресурсов',
                  'Проекты рекультивации нарушенных земель и восстановления плодородного слоя'
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-3 items-start group">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{service}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-2xl animate-fade-in-up bg-white/80 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-secondary to-orange-600 rounded-2xl flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Экологическое направление</CardTitle>
                <CardDescription className="text-base">Комплексные экологические услуги</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Экологическое проектирование согласно ФЗ №7 "Об охране окружающей среды"',
                  'Экологическое нормирование: КЭР, ПНООЛР, ПДВ, НДС',
                  'Экологическое сопровождение и консалтинг'
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-3 items-start group">
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{service}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-orange-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              Блог
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости и статьи</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Актуальная информация об экологическом законодательстве и наших проектах
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Новые требования экологического законодательства 2024',
                description: 'Обзор изменений в федеральном законодательстве об охране окружающей среды',
                date: '15 декабря 2024',
                icon: 'BookOpen'
              },
              {
                title: 'Успешная реализация проекта рекультивации',
                description: 'Завершен масштабный проект по восстановлению нарушенных земель в Кузбассе',
                date: '10 декабря 2024',
                icon: 'TrendingUp'
              },
              {
                title: 'Экологическое нормирование: практические советы',
                description: 'Как правильно подготовить документацию для получения разрешений',
                date: '5 декабря 2024',
                icon: 'FileCheck'
              },
            ].map((post, idx) => (
              <Card 
                key={idx} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-fade-in-up bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={post.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-secondary">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
              Контакты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <Card className="border-2 border-primary/20 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                  <CardDescription>Заполните форму, и мы ответим вам в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 text-lg py-6"
                    >
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {[
                { icon: 'MapPin', title: 'Адрес', content: 'г. Кемерово, Кузбасс' },
                { icon: 'Phone', title: 'Телефон', content: '+7 (3842) XX-XX-XX' },
                { icon: 'Mail', title: 'Email', content: 'info@sibeco.pro' },
                { icon: 'Clock', title: 'Режим работы', content: 'Пн-Пт: 9:00 - 18:00' },
              ].map((contact, idx) => (
                <Card 
                  key={idx} 
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{contact.title}</h3>
                      <p className="text-muted-foreground">{contact.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">СибЭко</span>
              </div>
              <p className="text-white/80">Экологическое проектирование и консалтинг с 1996 года</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2">
                {['О компании', 'Услуги', 'Блог', 'Контакты'].map((item, idx) => (
                  <li key={idx}>
                    <button className="text-white/80 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Проектирование</li>
                <li>Экология</li>
                <li>Консалтинг</li>
                <li>Нормирование</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>г. Кемерово</li>
                <li>+7 (3842) XX-XX-XX</li>
                <li>info@sibeco.pro</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2024 ООО «СибЭко». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
