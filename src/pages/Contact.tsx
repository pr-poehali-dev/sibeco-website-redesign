import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
                  item.path === '/contact' 
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
                <Icon name="MessageSquare" className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Свяжитесь с нами
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 animate-fade-in-up">
              <Card className="border-2 border-slate-200/60 shadow-2xl bg-white">
                <CardHeader>
                  <CardTitle className="text-3xl text-slate-900">Форма обратной связи</CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    Заполните форму, и мы ответим вам в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Ваше имя</label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-2 border-slate-200 focus:border-blue-500 transition-colors h-12 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-2 border-slate-200 focus:border-blue-500 transition-colors h-12 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="border-2 border-slate-200 focus:border-blue-500 transition-colors h-12 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Ваше сообщение</label>
                      <Textarea
                        placeholder="Расскажите о вашем проекте..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="border-2 border-slate-200 focus:border-blue-500 transition-colors text-base"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg py-7 shadow-lg hover:shadow-xl"
                    >
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {[
                { 
                  icon: 'MapPin', 
                  title: 'Адрес', 
                  content: 'г. Кемерово, Кузбасс',
                  gradient: 'from-blue-600 to-cyan-600'
                },
                { 
                  icon: 'Phone', 
                  title: 'Телефон', 
                  content: '+7 (3842) XX-XX-XX',
                  gradient: 'from-purple-600 to-pink-600'
                },
                { 
                  icon: 'Mail', 
                  title: 'Email', 
                  content: 'info@sibeco.pro',
                  gradient: 'from-emerald-600 to-teal-600'
                },
                { 
                  icon: 'Clock', 
                  title: 'Режим работы', 
                  content: 'Пн-Пт: 9:00 - 18:00',
                  gradient: 'from-orange-600 to-red-600'
                },
              ].map((contact, idx) => (
                <Card 
                  key={idx} 
                  className="border-2 border-slate-200/60 hover:border-blue-400/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white"
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon name={contact.icon as any} className="text-white" size={26} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-slate-900">{contact.title}</h3>
                      <p className="text-slate-600 text-base">{contact.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: 'Clock', title: 'Быстрый ответ', desc: 'Отвечаем в течение 24 часов' },
                { icon: 'Shield', title: 'Конфиденциальность', desc: 'Ваши данные защищены' },
                { icon: 'CheckCircle', title: 'Профессионализм', desc: 'Опыт работы с 1996 года' },
              ].map((item, idx) => (
                <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
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

export default Contact;
