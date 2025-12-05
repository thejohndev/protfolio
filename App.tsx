import  { useState } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin, Code2, Database, Smartphone, Globe, Zap, Menu, X, ArrowRight, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { 
      name: 'Web Development', 
      icon: Code2, 
      description: 'HTML, CSS, JavaScript, React',
      level: 92
    },
    { 
      name: 'Backend Development', 
      icon: Database, 
      description: 'Node.js, Express.js, RESTful APIs',
      level: 88
    },
    { 
      name: 'Android Development', 
      icon: Smartphone, 
      description: 'Java, XML, Android Studio',
      level: 85
    },
    { 
      name: 'Cross Platform', 
      icon: Globe, 
      description: 'Flutter, Dart, Mobile Apps',
      level: 80
    },
    { 
      name: 'Database Management', 
      icon: Database, 
      description: 'Firebase, SQL, MongoDB',
      level: 87
    },
    { 
      name: 'Development Tools', 
      icon: Zap, 
      description: 'Git, VS Code, Android Studio',
      level: 90
    },
  ];

  const projects = [
    {
      title: 'Tastik – Food Delivery App',
      description: 'Tastik – Food Delivery ApplicationA mobile app that allows users to discover restaurants, view menus, customize orders, and track delivery status in real-time. Built with Flutter and Firebase for a smooth cross-platform experience.',
      image: 'https://images.unsplash.com/photo-1652862730747-d8c159300ccc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/thejohndev/tastikweb',
      demo: 'https://thejohndev.github.io/tastikweb/',
      tech: ['React','flutter', 'Node.js', 'firebase'],
      featured: true
    },
    {
      title: 'Steganography',
      description: 'Steganography – A tool that hides secret messages within images or videos.i am using lsb algoirhm to hide the message in the image',
      image: 'https://img.freepik.com/free-vector/illustration-business-expertise_53876-9159.jpg?t=st=1757246869~exp=1757250469~hmac=858036ba6abc26fed19239e5ebc346f29609e5f000a3350a64b31ff4b3c1213b&w=1480',
      github: 'https://github.com/thejohndev/steganography',
      demo: 'https://thejohndev.github.io/steganography/',
      tech: ['html', 'css', 'java script'],
      featured: false
    },
    {
      title: 'Bus tracker',
      description: 'Bus Tracker – A college app that lets students track campus buses in real-time.Get live bus locations, route details, and estimated arrival times for hassle-free commuting.',
      image: 'https://media.istockphoto.com/id/1176587775/photo/happy-two-asian-students-are-standing-near-school-bus.webp?a=1&b=1&s=612x612&w=0&k=20&c=dEuBEC8Ze9_LYypyP7ElRDVIeMGT46Tt5xZptv2VhYw=',
      github: 'https://github.com/thejohndev/bustrack',
      demo: 'https://thejohndev.github.io/bustrack/',
      tech: ['react', 'firebase', 'node.js', 'google map sdk'],
      featured: false
    },
    {
      title: 'Found It',
      description: 'FoundIt – Lost & Found Item Tracker A web/mobile application that allows users to upload found items, report lost belongings, and connect owners with their missing items through a simple, real-time interface.',
      image: 'https://plus.unsplash.com/premium_photo-1723291299140-2a0af3319f57?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/thejohndev/foundit',
      demo: 'https://thejohndev.github.io/foundit/',
      tech: ['React', 'Firebase', 'tailwindcss'],
      featured: true
    },
    {
      title: 'Library Management System',
      description: 'A web application that allows library admin to manage their library books, including adding, deleting, and updating book information.Users see the list of available books,reserve Books,add favorite books.',
      image: 'https://img.freepik.com/premium-vector/female-librarian-sitting-library-counter_11197-317.jpg?w=1480',
      github: 'https://github.com/thejohndev/librarymanage',
      demo: 'https://thejohndev.github.io/librarymanage/',
      tech: ['react', 'firebase', 'node.js'],
      featured: true
    },
    {
      title: 'Aviator',
      description: 'Aviator – A free online betting game where players predict the plane’s multiplier to win.',
      image: 'https://images.unsplash.com/photo-1465993891989-6d2728076e9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/thejohndev/aviatorcode',
      demo: 'https://thejohndev.github.io/aviator/',
      tech: ['React', 'Node.js', 'firebase'],
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">
              John Prakash
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Home</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">About</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Contact</a>
              {/* <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition-colors font-medium">
                Resume
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Skills</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Projects</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Available for work
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Creative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Developer
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I build modern web applications, mobile apps, and cross-platform solutions. 
              Specializing in React, Node.js, Android development, and Flutter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='#projects'><button className="bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 font-medium flex items-center gap-2 group" >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button></a>
              {/* <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 font-medium flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button> */}
            </div>
            
            <div className="flex items-center gap-6 mt-12">
              <a href="https://github.com/thejohndev" target='_blank' className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                <Github size={20} className="text-slate-700" />
              </a>
              {/* <a href="https://linkedin.com" className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={20} className="text-slate-700" />
              </a>
              <a href="https://twitter.com" className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-slate-700" />
              </a> */}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
                <div className="w-full h-full bg-slate-50 rounded-3xl flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in web development, 
                mobile app development, and database management. I love creating efficient, 
                scalable solutions using modern technologies.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                My experience spans from frontend technologies like React
                to backend development with Node.js, and mobile development with both native 
                Android and cross-platform Flutter applications.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">10+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">3+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">2+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">10+</div>
                  <div className="text-slate-600">Technologies</div>
                </div>
              </div>
              
              <a 
                href="https://github.com/thejohndev" target='_blank'
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                <Github size={20} />
                View GitHub Profile
                <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-slate-800 text-green-400 p-6 rounded-2xl font-mono text-sm">
                    <div className="mb-2">$ whoami</div>
                    <div className="text-white mb-4">john-prakash</div>
                    <div className="mb-2">$ cat skills.txt</div>
                    <div className="text-blue-400">React.js ✓</div>
                    <div className="text-purple-400">Node.js ✓</div>
                    <div className="text-yellow-400">Flutter ✓</div>
                    <div className="text-pink-400">Android Studio ✓</div>
                    <div className="text-green-400">Firebase ✓</div>
                    <div className="text-purple-400">sql mongodb ✓</div>
                    <div className="animate-pulse">_</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I specialize in modern technologies and frameworks to build scalable, 
              performant applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.name}</h3>
                  <p className="text-slate-600 mb-4">{skill.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Proficiency</span>
                      <span className="text-slate-900 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={index}
                className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-slate-600">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target='_blank'
                      className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target='_blank'
                      className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">johnprakash7878@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-300">+91 96401 22807</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-slate-300">India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://github.com/thejohndev" target='_blank' className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                  <Github size={20} />
                </a>
                {/* <a href="https://linkedin.com" target='_blank' className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={20} />
                </a> */}
                {/* <a href="https://twitter.com" target='_blank' className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl">
              <form action='mailto:prakashjohn7878@gmail.com' className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-slate-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-slate-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-slate-400"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  onClick={()=>{
                    
                  }}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold mb-2">John Prakash</div>
              <p className="text-slate-400">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;