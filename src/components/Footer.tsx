import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FooterProps {
  translations: any;
}

const Footer = ({ translations }: FooterProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: translations.footer.form.successTitle,
      description: translations.footer.form.successMessage,
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {translations.footer.contactTitle}
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@naputubudjenja.com"
                className="flex items-center space-x-3 text-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>info@naputubudjenja.com</span>
              </a>
              
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-primary/20 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-primary/20 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {translations.footer.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder={translations.footer.form.firstName}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
                <Input
                  placeholder={translations.footer.form.lastName}
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>
              
              <Input
                type="email"
                placeholder={translations.footer.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border focus:border-primary transition-colors"
              />
              
              <Select
                value={formData.subject}
                onValueChange={(value) => setFormData({ ...formData, subject: value })}
              >
                <SelectTrigger className="bg-background/50 border-border focus:border-primary">
                  <SelectValue placeholder={translations.footer.form.subject} />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="therapy">{translations.footer.form.subjectOptions.therapy}</SelectItem>
                  <SelectItem value="academy">{translations.footer.form.subjectOptions.academy}</SelectItem>
                  <SelectItem value="courses">{translations.footer.form.subjectOptions.courses}</SelectItem>
                  <SelectItem value="other">{translations.footer.form.subjectOptions.other}</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea
                placeholder={translations.footer.form.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
              />
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                {translations.footer.form.submit}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p>© 2025 Na putu buđenja. {translations.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
