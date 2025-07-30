'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon, Code, Palette, Users, Award, Globe, Zap, Shield, Database, Cloud, Smartphone, CheckCircle, ArrowRight, Star, Clock, Target, Lightbulb, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary-blue">TechCorp</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                Sign In
              </Button>
              <Button className="bg-primary-blue hover:bg-primary-dark">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold heading-primary leading-tight mb-6">
                  Great software is built by
                  <span className="text-primary-blue block">great teams</span>
                </h1>
                <p className="text-xl text-secondary mb-8 leading-relaxed">
                  We create exceptional digital experiences that drive growth and innovation for businesses worldwide. Our expert team delivers cutting-edge solutions tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4 h-auto">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="btn-outline-primary text-lg px-8 py-4 h-auto">
                    View Our Work
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="card-gradient rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold heading-primary mb-2">Expert Development</h3>
                    <p className="text-secondary">Building tomorrow's solutions today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding section-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-primary mb-4">Our Services</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code}
              title="Web Design & Development"
              description="Custom websites and web applications built with modern technologies and best practices."
              features={['Responsive Design', 'Modern Frameworks', 'Performance Optimization']}
            />
            <ServiceCard
              icon={Palette}
              title="UI/UX Design"
              description="Beautiful, intuitive interfaces that enhance user experience and drive engagement."
              features={['User Research', 'Prototyping', 'Design Systems']}
            />
            <ServiceCard
              icon={Users}
              title="Team Collaboration"
              description="Streamlined workflows and tools to boost your team's productivity and communication."
              features={['Agile Methodology', 'Project Management', 'Communication Tools']}
            />
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold heading-primary mb-6">Trusted by Industry Leaders</h2>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                We've helped hundreds of businesses transform their digital presence and achieve their goals through innovative solutions and expert guidance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <StatCard value="500+" label="Happy Clients" />
                <StatCard value="1000+" label="Projects Completed" />
                <StatCard value="50+" label="Team Members" />
                <StatCard value="99%" label="Client Satisfaction" />
              </div>
            </div>
            <div className="card-gradient rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold heading-primary mb-2">Award-Winning Agency</h3>
                <p className="text-secondary">Recognized for excellence in digital solutions</p>
                <div className="flex justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section id="team" className="section-padding section-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-primary mb-4">Building Great Teams</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Our collaborative approach ensures your project succeeds through expert teamwork and communication.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="feature-icon p-4 rounded-xl">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold heading-primary mb-3">Expert Team Members</h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    Our developers, designers, and project managers work together seamlessly to deliver exceptional results that exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="feature-icon p-4 rounded-xl">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold heading-primary mb-3">Agile Process</h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    We follow modern agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the project lifecycle.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="feature-icon p-4 rounded-xl">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold heading-primary mb-3">Global Collaboration</h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    Our distributed team works across time zones to provide round-the-clock support and development capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-gradient rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold heading-primary mb-2">Team Collaboration</h3>
                <p className="text-secondary">Working together for success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-primary mb-4">Technology Stack</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <TechCard name="Node.js" icon={Code} />
            <TechCard name="PHP" icon={Code} />
            <TechCard name="React" icon={Code} />
            <TechCard name="Vue.js" icon={Code} />
            <TechCard name="Angular" icon={Code} />
            <TechCard name="Database" icon={Database} />
            <TechCard name="Cloud" icon={Cloud} />
            <TechCard name="Mobile" icon={Smartphone} />
            <TechCard name="Security" icon={Shield} />
            <TechCard name="DevOps" icon={Zap} />
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="section-padding section-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-primary mb-4">Our Development Process</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A structured approach to ensure project success and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard
              step="01"
              title="Discovery"
              icon={Lightbulb}
              description="Understanding your requirements and business objectives"
            />
            <ProcessCard
              step="02"
              title="Design"
              icon={Palette}
              description="Creating intuitive and engaging user experiences"
            />
            <ProcessCard
              step="03"
              title="Development"
              icon={Code}
              description="Building robust and scalable solutions"
            />
            <ProcessCard
              step="04"
              title="Launch"
              icon={Rocket}
              description="Deploying and supporting your digital solution"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-primary mb-4">Case Studies</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Discover how we've helped businesses achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="E-commerce Platform"
              description="Built a scalable e-commerce solution that increased sales by 300%."
              category="Web Development"
            />
            <CaseStudyCard
              title="Mobile Banking App"
              description="Developed a secure mobile banking app with 500K+ active users."
              category="Mobile Development"
            />
            <CaseStudyCard
              title="Enterprise Dashboard"
              description="Created a comprehensive analytics dashboard for enterprise clients."
              category="Data Visualization"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold cta-text mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl cta-text mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join hundreds of businesses that have transformed their digital presence with our expert team.
          </p>
          <Button size="lg" variant="secondary" className="cta-button text-lg px-8 py-4 h-auto">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TechCorp</h3>
              <p className="footer-text mb-4 leading-relaxed">
                We build great software with great teams. Your success is our mission.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="footer-link hover:text-white cursor-pointer">Web Development</li>
                <li className="footer-link hover:text-white cursor-pointer">Mobile Development</li>
                <li className="footer-link hover:text-white cursor-pointer">UI/UX Design</li>
                <li className="footer-link hover:text-white cursor-pointer">Consulting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="footer-link hover:text-white cursor-pointer">About</li>
                <li className="footer-link hover:text-white cursor-pointer">Careers</li>
                <li className="footer-link hover:text-white cursor-pointer">Contact</li>
                <li className="footer-link hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">We're Hiring!</h3>
              <p className="footer-text mb-4 leading-relaxed">
                Join our team of talented developers and designers.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Open Positions
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center footer-text">
            <p>© 2024 TechCorp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon: Icon, title, description, features }: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <Card className="h-full card-primary hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="feature-icon w-16 h-16 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-2xl font-bold heading-primary">{title}</CardTitle>
        <CardDescription className="text-lg text-secondary">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary-blue" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Stat Card Component
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="stat-number text-4xl mb-2">{value}</div>
      <div className="stat-label text-lg">{label}</div>
    </div>
  );
}

// Tech Card Component
function TechCard({ name, icon: Icon }: { name: string; icon: LucideIcon }) {
  return (
    <Card className="text-center card-primary hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <Icon className="w-12 h-12 mx-auto mb-4 text-primary-blue" />
        <div className="text-lg font-semibold heading-primary">{name}</div>
      </CardContent>
    </Card>
  );
}

// Process Card Component
function ProcessCard({ step, title, icon: Icon, description }: {
  step: string;
  title: string;
  icon: LucideIcon;
  description: string;
}) {
  return (
    <Card className="text-center card-primary hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="step-number text-3xl mb-4">{step}</div>
        <div className="step-icon w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold heading-primary mb-3">{title}</h3>
        <p className="text-secondary">{description}</p>
      </CardContent>
    </Card>
  );
}

// Case Study Card Component
function CaseStudyCard({ title, description, category }: {
  title: string;
  description: string;
  category: string;
}) {
  return (
    <Card className="h-full card-primary hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-3 badge-primary">{category}</Badge>
        <CardTitle className="text-2xl font-bold heading-primary">{title}</CardTitle>
        <CardDescription className="text-lg text-secondary">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full btn-outline-primary">
          Read Case Study
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}