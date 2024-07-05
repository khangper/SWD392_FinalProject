import React from "react";
import "./Sitemap.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { BsBarChart } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi";
import { CiRuler } from "react-icons/ci";
import { SiCircle } from "react-icons/si";
import { IoCameraOutline } from "react-icons/io5";
import { LuHeartPulse } from "react-icons/lu";
import { HiOutlineMusicNote } from "react-icons/hi";
import { LiaReact } from "react-icons/lia";

const Sitemap = () => {
  return (
    <main className="sitemap">
      <div className="sitemap-item">
        <div className="sitemap-input">
          <button className="sitemap-button-search">
            <AiOutlineSearch className="sitemap-icon-search" />
          </button>
          <input
            type="text"
            className="sitemap-input-child"
            placeholder="Search categories.."
          />
        </div>
      </div>

      <div className="sitemap-heading-4">All Categories</div>
      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <TfiArrowsHorizontal className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Development</div>
      </div>
      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Web development</div>
          <div className="sitemap-list">
            <a href="#"> Javascript</a>
            <a href="#"> Angular</a>
            <a href="#"> React</a>
            <a href="#"> CSS</a>
            <a href="#"> PHP</a>
            <a href="#"> Node.Js</a>
            <a href="#"> WordPress</a>
            <a href="#"> Vue JS</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Data Science</div>
          <div className="sitemap-list">
            <a href="#"> Machine Learning</a>
            <a href="#"> Python</a>
            <a href="#"> Deep Learning</a>
            <a href="#"> Data Analysis</a>
            <a href="#"> Artificial Intelligence</a>
            <a href="#"> TensorFlow</a>
            <a href="#"> Neural Networks</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Mobile Apps</div>
          <div className="sitemap-list">
            <a href="#"> Android Development</a>
            <a href="#"> iOS Development</a>
            <a href="#"> Google Flutter</a>
            <a href="#"> Swift</a>
            <a href="#"> React Native</a>
            <a href="#"> Dart Programming Language</a>
            <a href="#"> Mobile Development</a>
            <a href="#"> Kotlin</a>
            <a href="#"> Redux Framework</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Programming Languages</div>
          <div className="sitemap-list">
            <a href="#"> Python</a>
            <a href="#"> Java</a>
            <a href="#"> C#</a>
            <a href="#"> JavaScript</a>
            <a href="#"> React</a>
            <a href="#"> C++</a>
            <a href="#"> Spring Framework</a>
            <a href="#"> Go Programming Language</a>
            <a href="#"> C</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Game Development</div>
          <div className="sitemap-list">
            <a href="#"> Unity</a>
            <a href="#"> C#</a>
            <a href="#"> Game Development Fundamentals</a>
            <a href="#"> Unreal Engine</a>
            <a href="#"> 3D Game Development</a>
            <a href="#"> C++</a>
            <a href="#"> 2D Game Development</a>
            <a href="#"> Unreal Engine Blueprints</a>
            <a href="#"> Mobile Game Development</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Databases</div>
          <div className="sitemap-list">
            <a href="#"> SQL</a>
            <a href="#"> MySQL</a>
            <a href="#"> Oracle SQL</a>
            <a href="#"> MongoDB</a>
            <a href="#"> SQL Server</a>
            <a href="#"> Oracle Certification</a>
            <a href="#"> Apache Kafka</a>
            <a href="#"> Database Management</a>
            <a href="#"> Database Programming</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Software Testing</div>
          <div className="sitemap-list">
            <a href="#"> Selenium WebDriver</a>
            <a href="#"> Java</a>
            <a href="#"> Selenium Testing Framework</a>
            <a href="#"> Automation Testing</a>
            <a href="#"> API Testing</a>
            <a href="#"> Automation</a>
            <a href="#"> REST Assured</a>
            <a href="#"> Appium</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Software Engineering</div>
          <div className="sitemap-list">
            <a href="#"> AWS Certification</a>
            <a href="#"> AWS Certified Developer - Associate</a>
            <a href="#"> Interviewing Skills</a>
            <a href="#"> Agile</a>
            <a href="#"> Professional Scrum Master (PSM)</a>
            <a href="#"> Kubernetes</a>
            <a href="#"> Python</a>
            <a href="#"> Microservices</a>
            <a href="#"> Elasticsearch</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Development Tools</div>
          <div className="sitemap-list">
            <a href="#"> Docker</a>
            <a href="#"> Kubernetes</a>
            <a href="#"> Git</a>
            <a href="#"> DevOps</a>
            <a href="#"> Jenkins</a>
            <a href="#"> AWS Certification</a>
            <a href="#"> AWS Certified Developer - Associate</a>
            <a href="#"> JIRA</a>
            <a href="#"> Confluence</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">E-Commerce</div>
          <div className="sitemap-list">
            <a href="#"> WooCommerce</a>
            <a href="#"> Shopify</a>
            <a href="#"> WordPress for Ecommerce</a>
            <a href="#"> Dropshipping</a>
            <a href="#"> Magento</a>
            <a href="#"> Online Business</a>
            <a href="#"> WordPress</a>
            <a href="#"> Web Development</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <BsBarChart className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Business</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Finance</div>
          <div className="sitemap-list">
            <a href="#"> Financial Analysis</a>
            <a href="#"> Investing</a>
            <a href="#"> Stock Trading</a>
            <a href="#"> Finance Fundamentals</a>
            <a href="#"> Financial Modeling</a>
            <a href="#"> Forex</a>
            <a href="#"> Excel</a>
            <a href="#"> Accounting</a>
            <a href="#"> Python</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Entrepreneurship</div>
          <div className="sitemap-list">
            <a href="#"> Business Fundamentals</a>
            <a href="#"> Amazon FBA</a>
            <a href="#"> Dropshipping</a>
            <a href="#"> Entrepreneurship Fundamentals</a>
            <a href="#"> Business Plan</a>
            <a href="#"> Business Strategy</a>
            <a href="#"> Startup</a>
            <a href="#"> Blogging</a>
            <a href="#"> Amazon Kindle</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Communications</div>
          <div className="sitemap-list">
            <a href="#"> Writing</a>
            <a href="#"> Public Speaking</a>
            <a href="#"> Communication Skills</a>
            <a href="#"> Presentation Skills</a>
            <a href="#"> Fiction Writing</a>
            <a href="#"> Storytelling</a>
            <a href="#"> Novel Writing</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Writing Editing</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Management</div>
          <div className="sitemap-list">
            <a href="#"> Product Management</a>
            <a href="#"> Leadership</a>
            <a href="#"> Management Skills</a>
            <a href="#"> Business Process Management</a>
            <a href="#"> Agile</a>
            <a href="#"> Risk Management</a>
            <a href="#"> Scrum</a>
            <a href="#"> Quality Management</a>
            <a href="#"> ISO 9001</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Sales</div>
          <div className="sitemap-list">
            <a href="#"> Sales Skills</a>
            <a href="#"> B2B Sales</a>
            <a href="#"> Business Development</a>
            <a href="#"> LinkedIn</a>
            <a href="#"> Lead Generation</a>
            <a href="#"> Cold Email</a>
            <a href="#"> Presentation Skills</a>
            <a href="#"> Unreal Engine Blueprints</a>
            <a href="#"> Customer Success Management</a>
            <a href="#"> Customer Service</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Strategy</div>
          <div className="sitemap-list">
            <a href="#"> Digital Marketing</a>
            <a href="#"> Business Strategy</a>
            <a href="#"> Management Consulting</a>
            <a href="#"> Excel</a>
            <a href="#"> Financial Modeling</a>
            <a href="#"> Business Model</a>
            <a href="#"> Forex</a>
            <a href="#"> Innovation</a>
            <a href="#"> Swing Trading</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Operations</div>
          <div className="sitemap-list">
            <a href="#"> Supply Chain</a>
            <a href="#"> Robotic Process Automation</a>
            <a href="#"> UiPath</a>
            <a href="#"> Six Sigma</a>
            <a href="#"> Six Sigma Green Belt</a>
            <a href="#"> Quality Management</a>
            <a href="#"> Six Sigma Black Belt</a>
            <a href="#"> Lean Six Sigma Green Belt</a>
            <a href="#"> Six Sigma Yellow Belt</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Project Management</div>
          <div className="sitemap-list">
            <a href="#"> PMP</a>
            <a href="#"> PMBOK</a>
            <a href="#"> Agile</a>
            <a href="#"> Scrum</a>
            <a href="#"> PMI-ACP</a>
            <a href="#"> CAPM</a>
            <a href="#"> Microsoft Project</a>
            <a href="#"> Risk Management</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Business Law</div>
          <div className="sitemap-list">
            <a href="#"> GDPR</a>
            <a href="#"> Law</a>
            <a href="#"> Contract Law</a>
            <a href="#"> LGPD Lei Geral de Proteção de Dados</a>
            <a href="#"> Patent</a>
            <a href="#"> Contract Negotiation</a>
            <a href="#"> Intellectual Property</a>
            <a href="#"> Healthcare IT</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Data & Analytics</div>
          <div className="sitemap-list">
            <a href="#"> SQL</a>
            <a href="#"> Microsoft Power BI</a>
            <a href="#"> Business Analysis</a>
            <a href="#"> Tableau</a>
            <a href="#"> Business Intelligence</a>
            <a href="#"> MySQL</a>
            <a href="#"> Data Analysis</a>
            <a href="#"> Data Modeling</a>
            <a href="#"> Big Data</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Home Business</div>
          <div className="sitemap-list">
            <a href="#"> Amazon FBA</a>
            <a href="#"> Dropshipping</a>
            <a href="#"> Blogging</a>
            <a href="#"> Amazon Kindle</a>
            <a href="#"> Passive Income</a>
            <a href="#"> Online Business</a>
            <a href="#"> Shopify Dropshipping</a>
            <a href="#"> Affiliate Marketing</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Human Resources</div>
          <div className="sitemap-list">
            <a href="#"> Recruiting</a>
            <a href="#"> Instructional Design</a>
            <a href="#"> Talent Management</a>
            <a href="#"> Hiring</a>
            <a href="#"> Emotional Intelligence</a>
            <a href="#"> Diversity and Inclusion</a>
            <a href="#"> Management Skills</a>
            <a href="#"> Conflict Management</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Industry</div>
          <div className="sitemap-list">
            <a href="#"> Life Coaching</a>
            <a href="#"> Electrical Engineering</a>
            <a href="#"> Solar Energy</a>
            <a href="#"> Oil and Gas Industry</a>
            <a href="#"> EPLAN Electric P8</a>
            <a href="#"> Piping</a>
            <a href="#"> Manufacturing</a>
            <a href="#"> Management Consulting</a>
            <a href="#"> Pharmacy</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Media</div>
          <div className="sitemap-list">
            <a href="#"> Amazon Kindle</a>
            <a href="#"> Screenwriting</a>
            <a href="#"> Podcasting</a>
            <a href="#"> Audiobook Creation</a>
            <a href="#"> SEO</a>
            <a href="#"> Scrivener</a>
            <a href="#"> Journalism</a>
            <a href="#"> After Effects</a>
            <a href="#"> Motion Graphics</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Real Estate</div>
          <div className="sitemap-list">
            <a href="#"> Real Estate Investing</a>
            <a href="#"> Construction</a>
            <a href="#"> Financial Modeling</a>
            <a href="#"> Airbnb Hosting</a>
            <a href="#"> Property Management</a>
            <a href="#"> Mortgage</a>
            <a href="#"> House Buying</a>
            <a href="#"> Real Estate Marketing</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> PowerPoint</a>
            <a href="#"> QuickBooks Online</a>
            <a href="#"> Grant Writing</a>
            <a href="#"> Akka</a>
            <a href="#"> Shopify Dropshipping</a>
            <a href="#"> Freelance Writing</a>
            <a href="#"> PMI-RMP</a>
            <a href="#"> Amazon FBA</a>
            <a href="#"> Private Label Products</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <LuWallet className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Finance & Accounting</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Accounting & Bookkeeping</div>
          <div className="sitemap-list">
            <a href="#"> Accounting</a>
            <a href="#"> Finance Fundamentals</a>
            <a href="#"> Financial Accounting</a>
            <a href="#"> Bookkeeping</a>
            <a href="#"> SAP FICO</a>
            <a href="#"> Cost Accounting</a>
            <a href="#"> Management Accounting</a>
            <a href="#"> Startup</a>
            <a href="#"> Xero</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Compliance</div>
          <div className="sitemap-list">
            <a href="#"> Risk Management</a>
            <a href="#"> IFRS</a>
            <a href="#"> Anti-Money Laundering</a>
            <a href="#"> Internal Auditing</a>
            <a href="#"> Accounting</a>
            <a href="#"> Financial Risk Manager (FRM)</a>
            <a href="#"> Finance Fundamentals</a>
            <a href="#"> Identity Security</a>
            <a href="#"> ACCA</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Cryptocurrency & Blockchain</div>
          <div className="sitemap-list">
            <a href="#"> Blockchain</a>
            <a href="#"> Cryptocurrency</a>
            <a href="#"> Bitcoin</a>
            <a href="#"> Day Trading</a>
            <a href="#"> Technical Analysis</a>
            <a href="#"> Blender</a>
            <a href="#"> Algorithmic Trading</a>
            <a href="#"> Bitcoin Trading</a>
            <a href="#"> Ethereum</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Economics</div>
          <div className="sitemap-list">
            <a href="#"> Microeconomics</a>
            <a href="#"> Macroeconomics</a>
            <a href="#"> Entrepreneurship Fundamentals</a>
            <a href="#"> Personal Finance</a>
            <a href="#"> Political Science</a>
            <a href="#"> College Admissions</a>
            <a href="#"> Math</a>
            <a href="#"> Parenting</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Finance</div>
          <div className="sitemap-list">
            <a href="#"> Personal Finance</a>
            <a href="#"> Investment Banking</a>
            <a href="#"> CFA</a>
            <a href="#"> Financial Management</a>
            <a href="#"> Finance Fundamentals</a>
            <a href="#"> Financial Analysis</a>
            <a href="#"> Company Valuation</a>
            <a href="#"> Excel</a>
            <a href="#"> Corporate Finance</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Finance Cert & Exam Prep</div>
          <div className="sitemap-list">
            <a href="#"> CFA</a>
            <a href="#"> Financial Markets</a>
            <a href="#"> CMA</a>
            <a href="#"> Quantitative</a>
            <a href="#"> ACCA</a>
            <a href="#"> Financial Management</a>
            <a href="#"> Stock Trading</a>
            <a href="#"> Company Valuation</a>
            <a href="#"> Fixed Income Securities</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">
            Financial Modeling & Analysis
          </div>
          <div className="sitemap-list">
            <a href="#"> Financial Analysis</a>
            <a href="#"> Financial Modeling</a>
            <a href="#"> Finance Fundamentals</a>
            <a href="#"> Excel</a>
            <a href="#"> Investing</a>
            <a href="#"> Python</a>
            <a href="#"> Investment Banking</a>
            <a href="#"> Accounting</a>
            <a href="#"> CFA</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Investing & Trading</div>
          <div className="sitemap-list">
            <a href="#"> Stock Trading</a>
            <a href="#"> Investing</a>
            <a href="#"> Forex</a>
            <a href="#"> Financial Analysis</a>
            <a href="#"> Technical Analysis</a>
            <a href="#"> Options Trading</a>
            <a href="#"> Day Trading</a>
            <a href="#"> Financial Trading</a>
            <a href="#"> Algorithmic Trading</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Money Management Tools</div>
          <div className="sitemap-list">
            <a href="#"> QuickBooks Online</a>
            <a href="#"> Excel</a>
            <a href="#"> SAP FICO</a>
            <a href="#"> QuickBooks Pro</a>
            <a href="#"> QuickBooks</a>
            <a href="#"> Financial Modeling</a>
            <a href="#"> Excel Analysis</a>
            <a href="#"> Xero</a>
            <a href="#"> Financial Analysis</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Taxes</div>
          <div className="sitemap-list">
            <a href="#"> Tax Preparation</a>
            <a href="#"> Goods and Service Tax</a>
            <a href="#"> QuickBooks Online</a>
            <a href="#"> Accounting</a>
            <a href="#"> Finance Fundamentals</a>
            <a href="#"> Personal Finance</a>
            <a href="#"> Value Added Tax (VAT)</a>
            <a href="#"> Excel Analysis</a>
            <a href="#"> Law</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other Finance & Economics</div>
          <div className="sitemap-list">
            <a href="#"> PowerPoint</a>
            <a href="#"> Passive Income</a>
            <a href="#"> Investing</a>
            <a href="#"> ETF</a>
            <a href="#"> Personal Finance</a>
            <a href="#"> Debt</a>
            <a href="#"> Financial Planning</a>
            <a href="#"> Online Business</a>
            <a href="#"> Coaching</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <HiOutlineComputerDesktop className="sitemap-icon" />
        </div>
        <div className="sitemap-title">IT & Software</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">IT Certification</div>
          <div className="sitemap-list">
            <a href="#"> AWS Certification</a>
            <a href="#"> AWS Certified Solutions Architect-Associate</a>
            <a href="#"> Cisco CCNA</a>
            <a href="#"> CompTIA A+</a>
            <a href="#"> AWS Certified Developer-Associate</a>
            <a href="#"> CompTIA Security+</a>
            <a href="#"> AWS Certified Cloud Practitioner</a>
            <a href="#"> CompTIA Network+</a>
            <a href="#"> AWS Certified Solutions Architect-Professional</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Network & Security</div>
          <div className="sitemap-list">
            <a href="#"> Ethical Hacking</a>
            <a href="#"> Cyber Security</a>
            <a href="#"> Network Security</a>
            <a href="#"> CompTIA Security+</a>
            <a href="#"> CompTIA Network+</a>
            <a href="#"> Penetration Testing</a>
            <a href="#"> IT Networking Fundamentals</a>
            <a href="#"> Cisco CCNA</a>
            <a href="#"> Deep Web</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Hardware</div>
          <div className="sitemap-list">
            <a href="#"> PLC</a>
            <a href="#"> Arduino</a>
            <a href="#"> Microcontroller</a>
            <a href="#"> Raspberry Pi</a>
            <a href="#"> Electronics</a>
            <a href="#"> Embedded Systems</a>
            <a href="#"> FPGA</a>
            <a href="#"> RTOS</a>
            <a href="#"> Embedded C</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Operation Systems</div>
          <div className="sitemap-list">
            <a href="#"> Linux</a>
            <a href="#"> Windows Server</a>
            <a href="#"> Linux Administration</a>
            <a href="#"> Shell Scripting</a>
            <a href="#"> Active Directory</a>
            <a href="#"> PowerShell</a>
            <a href="#"> VMware Vsphere</a>
            <a href="#"> LPIC-1: Linux Administrator</a>
            <a href="#"> System Center Configuration</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Kubernetes</a>
            <a href="#"> AWS Certified Solutions Architect-Professional</a>
            <a href="#"> DevOps</a>
            <a href="#"> Python</a>
            <a href="#"> Data Structures</a>
            <a href="#"> Docker</a>
            <a href="#"> Java Algorithms</a>
            <a href="#"> Ansible</a>
            <a href="#"> Microsoft Azure</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <GrDocumentText className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Office Productivity</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Microsoft</div>
          <div className="sitemap-list">
            <a href="#"> Excel</a>
            <a href="#"> Excel VBA</a>
            <a href="#"> Excel Formulas anf Functions</a>
            <a href="#"> Data Analysis</a>
            <a href="#"> PowerPoint</a>
            <a href="#"> Pivot Tables</a>
            <a href="#"> Microsoft Access</a>
            <a href="#"> Microsoft Power BI</a>
            <a href="#"> Excel Dashboard</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Apple</div>
          <div className="sitemap-list">
            <a href="#"> iMovie</a>
            <a href="#"> Mac Basics</a>
            <a href="#"> Apple Keynote</a>
            <a href="#"> Numbers For Mac</a>
            <a href="#"> Mac Pages</a>
            <a href="#"> macOS</a>
            <a href="#"> Microsoft Word</a>
            <a href="#"> Microsoft Office 365</a>
            <a href="#"> iPad Basics</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Google</div>
          <div className="sitemap-list">
            <a href="#"> Google Sheets</a>
            <a href="#"> Google Drive</a>
            <a href="#"> Google Apps</a>
            <a href="#"> Excel</a>
            <a href="#"> Python</a>
            <a href="#"> Gmail Productivity</a>
            <a href="#"> G Suite</a>
            <a href="#"> Virtual Assistant</a>
            <a href="#"> Google Forms</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">SAP</div>
          <div className="sitemap-list">
            <a href="#"> SAP ABAP</a>
            <a href="#"> SAP MM</a>
            <a href="#"> SAP S/4HANA</a>
            <a href="#"> SAP SD</a>
            <a href="#"> SAP Financial Accounting</a>
            <a href="#"> SAP FICO</a>
            <a href="#"> Supply Chain</a>
            <a href="#"> SAP Basis</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Oracle</div>
          <div className="sitemap-list">
            <a href="#"> Oracle Database</a>
            <a href="#"> Oracle SQL</a>
            <a href="#"> Database Administration</a>
            <a href="#"> Oracle Fusion HCM</a>
            <a href="#"> SQL</a>
            <a href="#"> Oracle Primavera</a>
            <a href="#"> Oracle Data Integrator</a>
            <a href="#"> Oracle Business Intelligence</a>
          </div>
        </div>

        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Microsoft Power BI</a>
            <a href="#"> ServiceNow</a>
            <a href="#"> QuickBooks Pro</a>
            <a href="#"> QuickBooks</a>
            <a href="#"> Salesforce</a>
            <a href="#"> Typing</a>
            <a href="#"> AutoCAD</a>
            <a href="#"> Construction</a>
            <a href="#"> Python</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <HiOutlineBookOpen className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Personal Development</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Personal Transformation</div>
          <div className="sitemap-list">
            <a href="#"> Life Coaching</a>
            <a href="#"> Reiki</a>
            <a href="#"> Neuro-Linguistic Programming</a>
            <a href="#"> Energy Healing</a>
            <a href="#"> Neuroscience</a>
            <a href="#"> Emotional Intelligence</a>
            <a href="#"> Hypnotherapy</a>
            <a href="#"> Mindfulness</a>
            <a href="#"> Meditation</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Productivity</div>
          <div className="sitemap-list">
            <a href="#"> Personal Productivity</a>
            <a href="#"> Time Management</a>
            <a href="#"> Focus Mastery</a>
            <a href="#"> Goal Setting</a>
            <a href="#"> Organization</a>
            <a href="#"> Happiness</a>
            <a href="#"> Speed Reading</a>
            <a href="#"> Procrastination</a>
            <a href="#"> Habits</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Leadership</div>
          <div className="sitemap-list">
            <a href="#"> Management Skills</a>
            <a href="#"> Manager Training</a>
            <a href="#"> Public Speaking</a>
            <a href="#"> Conflict Management</a>
            <a href="#"> Communication Skills</a>
            <a href="#"> Emotional Intelligence</a>
            <a href="#"> Charisma</a>
            <a href="#"> Neuro-Linguistic Programming</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Personal Finance</div>
          <div className="sitemap-list">
            <a href="#"> Stock Trading</a>
            <a href="#"> Technical Analysis</a>
            <a href="#"> Forex</a>
            <a href="#"> Options Trading</a>
            <a href="#"> Day Trading</a>
            <a href="#"> Stock Options</a>
            <a href="#"> Investing</a>
            <a href="#"> Financial Trading</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Career Development</div>
          <div className="sitemap-list">
            <a href="#"> Resume and CV Writing</a>
            <a href="#"> Interviewing Skills</a>
            <a href="#"> LinkedIn</a>
            <a href="#"> Job Search</a>
            <a href="#"> Personal Networking</a>
            <a href="#"> Life Coaching</a>
            <a href="#"> Shopify Dropshipping</a>
            <a href="#"> Career Coaching</a>
            <a href="#"> Soft Skills</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Parenting & Relationships</div>
          <div className="sitemap-list">
            <a href="#"> Parenting</a>
            <a href="#"> Neuroscience</a>
            <a href="#"> Relationship Building</a>
            <a href="#"> Dating</a>
            <a href="#"> Life Coaching</a>
            <a href="#"> Early Childhood Education</a>
            <a href="#"> Child Psychology</a>
            <a href="#"> Love</a>
            <a href="#"> Counseling</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Happiness</div>
          <div className="sitemap-list">
            <a href="#"> Life Coaching</a>
            <a href="#"> Positive Psychology</a>
            <a href="#"> Mindfulness</a>
            <a href="#"> Law of Attraction</a>
            <a href="#"> CBT</a>
            <a href="#"> Habits</a>
            <a href="#"> Emotional Intelligence</a>
            <a href="#"> Decluttering</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Religion & Spirituality</div>
          <div className="sitemap-list">
            <a href="#"> Mindfulness</a>
            <a href="#"> Psychic</a>
            <a href="#"> Spirituality</a>
            <a href="#"> Tarot Reading</a>
            <a href="#"> Shamanism</a>
            <a href="#"> Mediumship</a>
            <a href="#"> Spiritual Healing</a>
            <a href="#"> Past Lives</a>
            <a href="#"> Crystal Energy</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Personal Brand Building</div>
          <div className="sitemap-list">
            <a href="#"> Personal Branding</a>
            <a href="#"> LinkedIn</a>
            <a href="#"> Body Language</a>
            <a href="#"> Digital Marketing</a>
            <a href="#"> Writing a Book</a>
            <a href="#"> Business Branding</a>
            <a href="#"> French Language</a>
            <a href="#"> Public Speaking</a>
            <a href="#"> Business Communication</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Creativity</div>
          <div className="sitemap-list">
            <a href="#"> Creative Writing</a>
            <a href="#"> Art Therapy</a>
            <a href="#"> Screenwriting</a>
            <a href="#"> Writing</a>
            <a href="#"> Writing a Book</a>
            <a href="#"> Storytelling</a>
            <a href="#"> Aromatherapy</a>
            <a href="#"> Drawing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Influence</div>
          <div className="sitemap-list">
            <a href="#"> Confidence</a>
            <a href="#"> Public Speaking</a>
            <a href="#"> Body Language</a>
            <a href="#"> Voice Training</a>
            <a href="#"> Communication Skills</a>
            <a href="#"> Negotiation</a>
            <a href="#"> Persuasion</a>
            <a href="#"> Entrepreneurship Fundamentals</a>
            <a href="#"> Presentation Skills</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Self Esteem</div>
          <div className="sitemap-list">
            <a href="#"> Confidence</a>
            <a href="#"> Self-Esteem</a>
            <a href="#"> Neuro-Linguistic Programming</a>
            <a href="#"> Social Skills</a>
            <a href="#"> Dance</a>
            <a href="#"> Personal Development</a>
            <a href="#"> Anxiety Management</a>
            <a href="#"> Conversation Skills</a>
            <a href="#"> Dating</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Stress Management</div>
          <div className="sitemap-list">
            <a href="#"> Anxiety Management</a>
            <a href="#"> Anger Management</a>
            <a href="#"> Emotional Intelligence</a>
            <a href="#"> Resilience</a>
            <a href="#"> EFT</a>
            <a href="#"> Mindfulness</a>
            <a href="#"> Meditation</a>
            <a href="#"> Energy Healing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Memory & Study Skills</div>
          <div className="sitemap-list">
            <a href="#"> Memory</a>
            <a href="#"> Speed Reading</a>
            <a href="#"> Learning Strategies</a>
            <a href="#"> Study Skills</a>
            <a href="#"> Focus Mastery</a>
            <a href="#"> Mind Mapping</a>
            <a href="#"> Learning Disability</a>
            <a href="#"> Mental Math</a>
            <a href="#"> Personal Development</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Motivation</div>
          <div className="sitemap-list">
            <a href="#"> Neuroplasticity</a>
            <a href="#"> Neuroscience</a>
            <a href="#"> Procrastination</a>
            <a href="#"> Personal Success</a>
            <a href="#"> Habits</a>
            <a href="#"> Confidence</a>
            <a href="#"> Goal Setting</a>
            <a href="#"> Goal Achievement</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Tantra</a>
            <a href="#"> PowerShell</a>
            <a href="#"> Freight Broker</a>
            <a href="#"> Fibonacci Trading</a>
            <a href="#"> Public Speaking</a>
            <a href="#"> CBT</a>
            <a href="#"> Car Repair</a>
            <a href="#"> French Language</a>
            <a href="#"> Astrology</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <CiRuler className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Design</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Web Design</div>
          <div className="sitemap-list">
            <a href="#"> WordPress</a>
            <a href="#"> CSS</a>
            <a href="#"> Photoshop</a>
            <a href="#"> Web Design Business</a>
            <a href="#"> HTML</a>
            <a href="#"> HTML5</a>
            <a href="#"> User Interface</a>
            <a href="#"> Landing Page Optimization</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Graphic Design</div>
          <div className="sitemap-list">
            <a href="#"> Photoshop</a>
            <a href="#"> Drawing</a>
            <a href="#"> Adobe Illustrator</a>
            <a href="#"> Digital Painting</a>
            <a href="#"> InDesign</a>
            <a href="#"> Character Design</a>
            <a href="#"> Figure Drawing</a>
            <a href="#"> Logo Design</a>
            
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Design Tools</div>
          <div className="sitemap-list">
            <a href="#"> Photoshop</a>
            <a href="#"> After Effects</a>
            <a href="#"> Procreate Digital Illustration App</a>
            <a href="#"> Video Editing</a>
            <a href="#"> Adobe Illustrator</a>
            <a href="#"> Digital Art</a>
            <a href="#"> Graphic Design</a>
            <a href="#"> Adobe Premiere</a>
            <a href="#"> AutoCAD</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">User Experience</div>
          <div className="sitemap-list">
            <a href="#"> User Experience Design</a>
            <a href="#"> User Interface</a>
            <a href="#"> Adobe XD</a>
            <a href="#"> Web Design</a>
            <a href="#"> Figma</a>
            <a href="#"> Mobile App Design</a>
            <a href="#"> Product Design</a>
            <a href="#"> Design Thinking</a>
            <a href="#"> Usability Testing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Game Design</div>
          <div className="sitemap-list">
            <a href="#"> Unity</a>
            <a href="#"> Pixel Art</a>
            <a href="#"> Blender</a>
            <a href="#"> Digital Painting</a>
            <a href="#"> Unreal Engine</a>
            <a href="#"> VFX Visual Effects</a>
            <a href="#"> Game Development Fundaments</a>
            <a href="#"> Drawing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Design Thinking</div>
          <div className="sitemap-list">
            <a href="#"> PowerPoint</a>
            <a href="#"> Gamification</a>
            <a href="#"> Drawing</a>
            <a href="#"> VLSI</a>
            <a href="#"> Marketing Plan</a>
            <a href="#"> SOLIDWORKS</a>
            <a href="#"> AutoCAD Electrical</a>
            <a href="#"> Logo Design</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">3D & Animation</div>
          <div className="sitemap-list">
            <a href="#"> Blender</a>
            <a href="#"> 3D Modeling</a>
            <a href="#"> After Effects</a>
            <a href="#"> Motion Graphics</a>
            <a href="#"> 2D Animation</a>
            <a href="#"> zBrush</a>
            <a href="#"> Maya</a>
            <a href="#"> 3ds Max</a>
            <a href="#"> 3D Animation</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Fashion</div>
          <div className="sitemap-list">
            <a href="#"> Fashion Design</a>
            <a href="#"> Adobe Illustrator</a>
            <a href="#"> Merch By Amazon</a>
            <a href="#"> T-Shirt Design</a>
            <a href="#"> Sewing</a>
            <a href="#"> T-Shirt Business</a>
            <a href="#"> Jewelry Design</a>
            <a href="#"> Photoshop</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Architectural Design</div>
          <div className="sitemap-list">
            <a href="#"> Revit</a>
            <a href="#"> AutoCAD</a>
            <a href="#"> Blender</a>
            <a href="#"> ARCHICAD</a>
            <a href="#"> SketchUp</a>
            <a href="#"> Photorealistic Rendering</a>
            <a href="#"> LEED</a>
            <a href="#"> 3ds Max</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Interior Design</div>
          <div className="sitemap-list">
            <a href="#"> SketchUp</a>
            <a href="#"> HVAC</a>
            <a href="#"> Lighting Design</a>
            <a href="#"> Blender</a>
            <a href="#"> Mechanical Engineering</a>
            <a href="#"> Piping</a>
            <a href="#"> Minimalist Lifestyle</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <TfiArrowsHorizontal className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Marketing</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Digital Marketing</div>
          <div className="sitemap-list">
            <a href="#"> Google Ads (Adwords)</a>
            <a href="#"> Google Ads (Adwords) Certification</a>
            <a href="#"> Social Media Marketing</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Facebook Marketing</a>
            <a href="#"> Google Analysis</a>
            <a href="#"> Business Strategy</a>
            <a href="#"> Email Marketing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Search Engine Optimization</div>
          <div className="sitemap-list">
            <a href="#"> SEO</a>
            <a href="#"> WordPress</a>
            <a href="#"> Local SEO</a>
            <a href="#"> SEO Audit</a>
            <a href="#"> Keyword Research</a>
            <a href="#"> Link Building</a>
            <a href="#"> Google Ads (Adwords)</a>
            <a href="#"> YouTube Marketing</a>
            <a href="#"> Google my Business</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Social Media Marketing</div>
          <div className="sitemap-list">
            <a href="#"> Instagram Marketing</a>
            <a href="#"> Facebook Marketing</a>
            <a href="#"> PPC Advertising</a>
            <a href="#"> Social Media Management</a>
            <a href="#"> Pinterest Marketing</a>
            <a href="#"> LinkedIn</a>
            <a href="#"> Twitter Marketing</a>
            <a href="#"> Podcasting</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Branding</div>
          <div className="sitemap-list">
            <a href="#"> Business Branding</a>
            <a href="#"> YouTube Audience Growth</a>
            <a href="#"> YouTube Marketing</a>
            <a href="#"> Personal Branding</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Brand Management</a>
            <a href="#"> Graphic Design</a>
            <a href="#"> Communication Skills</a>
            <a href="#"> Blogging</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Marketing Fundamentals</div>
          <div className="sitemap-list">
            <a href="#"> Copywriting</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Event Planning</a>
            <a href="#"> Sales Skills</a>
            <a href="#"> Persuasion</a>
            <a href="#"> Presentation Skills</a>
            <a href="#"> Marketing Plan</a>
            <a href="#"> Data Analysis</a>
            <a href="#"> Career Coaching</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Analysis & Automation</div>
          <div className="sitemap-list">
            <a href="#"> Google Analysis</a>
            <a href="#"> Google Analytics Individual Qualification (IQ)</a>
            <a href="#"> Data Analysis</a>
            <a href="#"> Google Tag Manager</a>
            <a href="#"> Marketing Analytics</a>
            <a href="#"> SQL</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Marketing Automation</a>
            <a href="#"> ActiveCampaign</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Public Relations</div>
          <div className="sitemap-list">
            <a href="#"> Startup</a>
            <a href="#"> Media Training</a>
            <a href="#"> Event Planning</a>
            <a href="#"> Public Speaking</a>
            <a href="#"> Podcasting</a>
            <a href="#"> Copywriting</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Business Communication</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Advertising</div>
          <div className="sitemap-list">
            <a href="#"> Google Ads (Adwords)</a>
            <a href="#"> Facebook Marketing</a>
            <a href="#"> Mailchimp</a>
            <a href="#"> Email Marketing</a>
            <a href="#"> Google Ads (AdWords) Certification</a>
            <a href="#"> PPC Advertising</a>
            <a href="#"> YouTube Marketing</a>
            <a href="#"> Digital Marketing</a>
            <a href="#"> Google Analytics</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Video & Mobile Marketing</div>
          <div className="sitemap-list">
            <a href="#"> YouTube Marketing</a>
            <a href="#"> Video Creation</a>
            <a href="#"> PowerPoint</a>
            <a href="#"> App Marketing</a>
            <a href="#"> App Store Optimization</a>
            <a href="#"> Video Marketing</a>
            <a href="#"> YouTube Audience Growth</a>
            <a href="#"> Whiteboard Animation</a>
            <a href="#"> Voice-Over</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Content Marketing</div>
          <div className="sitemap-list">
            <a href="#"> Copywriting</a>
            <a href="#"> Content Writing</a>
            <a href="#"> Writing</a>
            <a href="#"> Blogging</a>
            <a href="#"> WordPress</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> Podcasting</a>
            <a href="#"> Freelancing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Growth Hacking</div>
          <div className="sitemap-list">
            <a href="#"> Digital Marketing</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> App Marketing</a>
            <a href="#"> SEO</a>
            <a href="#"> Social Media Marketing</a>
            <a href="#"> Website Traffic</a>
            <a href="#"> Conversion Rate Optimization</a>
            <a href="#"> Lead Generation</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Affiliate Marketing</div>
          <div className="sitemap-list">
            <a href="#"> ClickBank</a>
            <a href="#"> Amazon Affiliate Marketing</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> SEO</a>
            <a href="#"> Teespring</a>
            <a href="#"> CPA Marketing</a>
            <a href="#"> Email Marketing</a>
            <a href="#"> Business Development</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Product Marketing</div>
          <div className="sitemap-list">
            <a href="#"> Selling on Amazon</a>
            <a href="#"> Product Management</a>
            <a href="#"> Amazon Kindle</a>
            <a href="#"> Etsy</a>
            <a href="#"> Copywriting</a>
            <a href="#"> Self-Publishing</a>
            <a href="#"> Marketing Plan</a>
            <a href="#"> Voice-Over</a>
            <a href="#"> E-Commerce</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Google Ads (AdWords) Certification</a>
            <a href="#"> YouTube Audience Growth</a>
            <a href="#"> Event Planning</a>
            <a href="#"> Conversion Rate Optimization</a>
            <a href="#"> Marketing Strategy</a>
            <a href="#"> A/B Testing</a>
            <a href="#"> Fundraising</a>
            <a href="#"> Marketing Plan</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <SiCircle className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Lifestyle</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Arts & Crafts</div>
          <div className="sitemap-list">
            <a href="#"> Drawing</a>
            <a href="#"> Watercolor Painting</a>
            <a href="#"> Pencil Drawing</a>
            <a href="#"> Sketching</a>
            <a href="#"> Figure Drawing</a>
            <a href="#"> Portraiture</a>
            <a href="#"> Painting</a>
            <a href="#"> Procreate Digital Illustration App</a>
            <a href="#"> Acrylic Painting</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Food & Beverage</div>
          <div className="sitemap-list">
            <a href="#"> Sourdough Bread Baking</a>
            <a href="#"> Bread Baking</a>
            <a href="#"> Cooking</a>
            <a href="#"> Wine</a>
            <a href="#"> Cake Decorating</a>
            <a href="#"> Baking</a>
            <a href="#"> Cake Baking</a>
            <a href="#"> Gluten Free Cooking and Banking</a>
            <a href="#"> Cookie Baking</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Beauty & Makeup</div>
          <div className="sitemap-list">
            <a href="#"> Beauty</a>
            <a href="#"> Makeup Artistry</a>
            <a href="#"> Skincare</a>
            <a href="#"> Cosmetic</a>
            <a href="#"> Nail Art</a>
            <a href="#"> Hair Styling</a>
            <a href="#"> Cupping Therapy</a>
            <a href="#"> Herbalism</a>
            <a href="#"> Face Yoga</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Travel</div>
          <div className="sitemap-list">
            <a href="#"> Travel Writing</a>
            <a href="#"> Writing</a>
            <a href="#"> Airbnb Hosting</a>
            <a href="#"> Journaling</a>
            <a href="#"> Digital Nomad</a>
            <a href="#"> Travel Hacking</a>
            <a href="#"> Travel Tips</a>
            <a href="#"> iMovie</a>
            <a href="#"> Mac Basis</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Gaming</div>
          <div className="sitemap-list">
            <a href="#"> eSports</a>
            <a href="#"> Chess</a>
            <a href="#"> Poker</a>
            <a href="#"> Twitch</a>
            <a href="#"> League of Legends</a>
            <a href="#"> Rubik's Cube</a>
            <a href="#"> Texas Hold'Em</a>
            <a href="#"> Content Creation</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Home Improvement</div>
          <div className="sitemap-list">
            <a href="#"> Electricity</a>
            <a href="#"> Electrical Writing</a>
            <a href="#"> Gardening</a>
            <a href="#"> Home Repair</a>
            <a href="#"> Feng Shui</a>
            <a href="#"> Decluttering</a>
            <a href="#"> Lighting Design</a>
            <a href="#"> Farming</a>
            <a href="#"> Aquaculture</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Pet Care & Training</div>
          <div className="sitemap-list">
            <a href="#"> Dog Training</a>
            <a href="#"> Dog Behavior</a>
            <a href="#"> Dog Care</a>
            <a href="#"> Cat Behavior</a>
            <a href="#"> Pet Training</a>
            <a href="#"> Pet Care</a>
            <a href="#"> Animal Nutrition</a>
            <a href="#"> Crystal Energy</a>
            <a href="#"> Dog Walking</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Neuro-Linguistic Programming</a>
            <a href="#"> EFT</a>
            <a href="#"> Emotional Intelligence</a>
            <a href="#"> Day Trading</a>
            <a href="#"> Meditation</a>
            <a href="#"> Life Coaching</a>
            <a href="#"> Tarot Reading</a>
            <a href="#"> Mindfulness</a>
            <a href="#"> Procrastination</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <IoCameraOutline className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Photography</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Digital Photography</div>
          <div className="sitemap-list">
            <a href="#"> Photography</a>
            <a href="#"> iPhone Photography</a>
            <a href="#"> DSLR</a>
            <a href="#"> Adobe Lightroom</a>
            <a href="#"> Affinity Photo</a>
            <a href="#"> Portrait Photography</a>
            <a href="#"> Night Photography</a>
            <a href="#"> Photoshop</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Photography Fundamentals</div>
          <div className="sitemap-list">
            <a href="#"> Photography</a>
            <a href="#"> Affinity Photo</a>
            <a href="#"> Photography Composition</a>
            <a href="#"> DSLR</a>
            <a href="#"> Photography Lighting</a>
            <a href="#"> Landscape Photography</a>
            <a href="#"> Digital Photography</a>
            <a href="#"> Filmmaking</a>
            <a href="#"> Adobe Premiere</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Portraits</div>
          <div className="sitemap-list">
            <a href="#"> Portrait Photography</a>
            <a href="#"> Posing</a>
            <a href="#"> Photoshop Retouching</a>
            <a href="#"> Photography Lighting</a>
            <a href="#"> Photography</a>
            <a href="#"> Family Portrait Photography</a>
            <a href="#"> Photoshop</a>
            <a href="#"> Adobe Lightroom</a>
            <a href="#"> Cameras</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Photography Tools</div>
          <div className="sitemap-list">
            <a href="#"> Adobe Lightroom</a>
            <a href="#"> Photoshop</a>
            <a href="#"> Image Editing</a>
            <a href="#"> Photoshop Retouching</a>
            <a href="#"> DSLR</a>
            <a href="#"> Photography</a>
            <a href="#"> Affinity Photo</a>
            <a href="#"> Drone Photography</a>
            <a href="#"> Cameras</a>
          </div>
        </div><div className="sitemap-container">
          <div className="sitemap-heading-41">Commercial Photography</div>
          <div className="sitemap-list">
            <a href="#"> Adobe Lightroom</a>
            <a href="#"> Photoshop</a>
            <a href="#"> Image Editing</a>
            <a href="#"> Photoshop Retouching</a>
            <a href="#"> DSLR</a>
            <a href="#"> Photography</a>
            <a href="#"> Affinity Photo</a>
            <a href="#"> Drone Photography</a>
            <a href="#"> Cameras</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Video Design</div>
          <div className="sitemap-list">
            <a href="#"> Video Editing</a>
            <a href="#"> Adobe Premiere</a>
            <a href="#"> Video Production</a>
            <a href="#"> Filmmaking</a>
            <a href="#"> Videography</a>
            <a href="#"> Final Cut Pro</a>
            <a href="#"> Color Grading</a>
            <a href="#"> DaVinci Resolve</a>
            <a href="#"> Storytelling</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Landscape Photography</a>
            <a href="#"> Nature Photography</a>
            <a href="#"> Filmmaking</a>
            <a href="#"> Adobe Lightroom</a>
            <a href="#"> Drone</a>
            <a href="#"> Cameras</a>
            <a href="#"> Workflow</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <LuHeartPulse className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Heath & Fitness</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Fitness</div>
          <div className="sitemap-list">
            <a href="#"> Pilates</a>
            <a href="#"> Home Workout</a>
            <a href="#"> Muscle Building</a>
            <a href="#"> Testosterone</a>
            <a href="#"> Teacher Training</a>
            <a href="#"> Posture</a>
            <a href="#"> Stretching Exercise</a>
            <a href="#"> Personal Transformation</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">General Health</div>
          <div className="sitemap-list">
            <a href="#"> Herbalism</a>
            <a href="#"> Massage</a>
            <a href="#"> Aromatherapy</a>
            <a href="#"> Acupressure</a>
            <a href="#"> Essential Oil</a>
            <a href="#"> Qi Gong</a>
            <a href="#"> Reflexology</a>
            <a href="#"> Spiritual Healing</a>
            <a href="#"> Breathing Techniques </a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Sports</div>
          <div className="sitemap-list">
            <a href="#"> Tennis</a>
            <a href="#"> Sports Coaching</a>
            <a href="#"> Soccer</a>
            <a href="#"> Sport Psychology</a>
            <a href="#"> Golf</a>
            <a href="#"> Running</a>
            <a href="#"> Swimming</a>
            <a href="#"> Martial Arts</a>
            <a href="#"> Fitness</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Nutrition</div>
          <div className="sitemap-list">
            <a href="#"> Health Coaching</a>
            <a href="#"> Dieting</a>
            <a href="#"> Vegan Cooking</a>
            <a href="#"> Ketogenic Diet</a>
            <a href="#"> Fasting</a>
            <a href="#"> Gut Health</a>
            <a href="#"> Weight Loss</a>
            <a href="#"> Meal Planning</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Yoga</div>
          <div className="sitemap-list">
            <a href="#"> Pranayama</a>
            <a href="#"> Yoga for Kids</a>
            <a href="#"> Chair Yoga</a>
            <a href="#"> Meditation</a>
            <a href="#"> Teacher Training</a>
            <a href="#"> Kundalini</a>
            <a href="#"> Back Pain</a>
            <a href="#"> Prenatal Yoga</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Mental Health</div>
          <div className="sitemap-list">
            <a href="#"> CBT</a>
            <a href="#"> Art Therapy</a>
            <a href="#"> Hypnotherapy</a>
            <a href="#"> Anxiety Management</a>
            <a href="#"> PTSD</a>
            <a href="#"> Medical Terminology</a>
            <a href="#"> Neuroplasticity</a>
            <a href="#"> Childhood Trauma Healing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Dieting</div>
          <div className="sitemap-list">
            <a href="#"> Weight Loss</a>
            <a href="#"> Ketogenic Diet</a>
            <a href="#"> Ketosis</a>
            <a href="#"> Psychology</a>
            <a href="#"> Nutrition</a>
            <a href="#"> Fasting</a>
            <a href="#"> Gluten Free Cooking and Baking</a>
            <a href="#"> Fat Loss</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Self Defense</div>
          <div className="sitemap-list">
            <a href="#"> Self-Defense</a>
            <a href="#"> Close Combat</a>
            <a href="#"> Tai Chi</a>
            <a href="#"> Wing Chun</a>
            <a href="#"> Krav Maga</a>
            <a href="#"> Martial Arts</a>
            <a href="#"> Boxing</a>
            <a href="#"> Brazilian Jiu-Jitsu</a>
            <a href="#"> Muay Thai </a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Safety & First Aid</div>
          <div className="sitemap-list">
            <a href="#"> First Aid</a>
            <a href="#"> Herbalism</a>
            <a href="#"> Survival Skills</a>
            <a href="#"> OSHA</a>
            <a href="#"> Microbiology</a>
            <a href="#"> Work Safety</a>
            <a href="#"> Electrocardiogram</a>
            <a href="#"> Food Safety</a>
            <a href="#"> Emergency Medicine</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Dance</div>
          <div className="sitemap-list">
            <a href="#"> Salsa Dancing</a>
            <a href="#"> Hip Hop Dancing</a>
            <a href="#"> Belly Dancing</a>
            <a href="#"> Bachata</a>
            <a href="#"> Ballet</a>
            <a href="#"> Kundalini</a>
            <a href="#"> Poi Spinning</a>
            <a href="#"> Breakdancing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Mediation</div>
          <div className="sitemap-list">
            <a href="#"> Energy Healing</a>
            <a href="#"> Mindfulness</a>
            <a href="#"> Psychic</a>
            <a href="#"> Addition Recovery</a>
            <a href="#"> Chakra</a>
            <a href="#"> Self-Hypnosis</a>
            <a href="#"> Goal Achievement</a>
            <a href="#"> Lucid Dreaming</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Massage</a>
            <a href="#"> EFT</a>
            <a href="#"> Sports Massage</a>
            <a href="#"> Qi Gong</a>
            <a href="#"> Hypnotherapy</a>
            <a href="#"> Crystal Energy</a>
            <a href="#"> Facial Massage</a>
            <a href="#"> Reiki</a>
            <a href="#"> Aromatherapy</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <HiOutlineMusicNote className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Music</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Instruments</div>
          <div className="sitemap-list">
            <a href="#"> Piano</a>
            <a href="#"> Guitar</a>
            <a href="#"> Keyboard Instrument</a>
            <a href="#"> Harmonica</a>
            <a href="#"> Fingerstyle Guitar</a>
            <a href="#"> Drums</a>
            <a href="#"> Bass Guitar</a>
            <a href="#"> Ukulele</a>
            <a href="#"> Blues Guitar</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Production</div>
          <div className="sitemap-list">
            <a href="#"> Music Production</a>
            <a href="#"> Logic Pro X</a>
            <a href="#"> Ableton Live</a>
            <a href="#"> Music Mixing</a>
            <a href="#"> Audio Production</a>
            <a href="#"> Music Composition</a>
            <a href="#"> Game Music</a>
            <a href="#"> FL Studio</a>
            <a href="#"> Audio Engineering</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Music Fundamentals</div>
          <div className="sitemap-list">
            <a href="#"> Music Theory</a>
            <a href="#"> Music Composition</a>
            <a href="#"> Electronic Music</a>
            <a href="#"> Songwriting</a>
            <a href="#"> Reading Music</a>
            <a href="#"> Piano Chords</a>
            <a href="#"> Blues Guitar</a>
            <a href="#"> ABRSM</a>
            <a href="#"> Piano</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Vocal</div>
          <div className="sitemap-list">
            <a href="#"> Singing</a>
            <a href="#"> Voice Training</a>
            <a href="#"> Rapping</a>
            <a href="#"> Voice Acting</a>
            <a href="#"> Yoga</a>
            <a href="#"> Raga Music</a>
            <a href="#"> Voice-Over</a>
            <a href="#"> Breathing Techniques</a>
            <a href="#"> Mindset</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Music Techniques</div>
          <div className="sitemap-list">
            <a href="#"> Music Composition</a>
            <a href="#"> Guitar</a>
            <a href="#"> Acoustic Guitar</a>
            <a href="#"> Reading Music</a>
            <a href="#"> Music Theory</a>
            <a href="#"> DJ</a>
            <a href="#"> Guitar Chords</a>
            <a href="#"> Fingerstyle Guitar</a>
            <a href="#"> Music Production</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Music Software</div>
          <div className="sitemap-list">
            <a href="#"> FL Studio</a>
            <a href="#"> Ableton Live</a>
            <a href="#"> Music Production</a>
            <a href="#"> Logic Pro X</a>
            <a href="#"> Cubase</a>
            <a href="#"> Pro Tools</a>
            <a href="#"> GarageBand</a>
            <a href="#"> Presonus</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other</div>
          <div className="sitemap-list">
            <a href="#"> Songwriting</a>
            <a href="#"> Sound Therapy</a>
            <a href="#"> Music Marketing</a>
            <a href="#"> Music Business</a>
            <a href="#"> Talent Agent</a>
            <a href="#"> Music Production</a>
            <a href="#"> Music Theory</a>
            <a href="#"> Rapping</a>
          </div>
        </div>
      </div>

      <div className="sitemap-title-big">
        <div className="sitemap-border">
          <LiaReact className="sitemap-icon" />
        </div>
        <div className="sitemap-title">Teaching & Academics</div>
      </div>

      <div className="sitemap-details">
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Engineering</div>
          <div className="sitemap-list">
            <a href="#"> Data Structures</a>
            <a href="#"> Algorithms</a>
            <a href="#"> Civil Engineering</a>
            <a href="#"> Electronics</a>
            <a href="#"> Robotics</a>
            <a href="#"> Structural Engineering</a>
            <a href="#"> Electrical Engineering</a>
            <a href="#"> Mechanical Engineering</a>
            <a href="#"> Revit</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Humanities</div>
          <div className="sitemap-list">
            <a href="#"> The Bible</a>
            <a href="#"> English Literature</a>
            <a href="#"> Christianity</a>
            <a href="#"> Critical Thinking</a>
            <a href="#"> Philosophy</a>
            <a href="#"> Psychology</a>
            <a href="#"> Art History</a>
            <a href="#"> Creative Writing</a>
            <a href="#"> Academic Writing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Math</div>
          <div className="sitemap-list">
            <a href="#"> Calculus</a>
            <a href="#"> Statistics</a>
            <a href="#"> Linear Algebra</a>
            <a href="#"> Probability</a>
            <a href="#"> Algebra</a>
            <a href="#"> Trigonometry</a>
            <a href="#"> Discrete Math</a>
            <a href="#"> Geometry</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Science</div>
          <div className="sitemap-list">
            <a href="#"> Physics</a>
            <a href="#"> Solar Energy</a>
            <a href="#"> Neuroscience</a>
            <a href="#"> Anatomy</a>
            <a href="#"> Biology</a>
            <a href="#"> Radio Frequency</a>
            <a href="#"> Research Paper Writing</a>
            <a href="#"> Chemistry</a>
            <a href="#"> Physiology</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Online Education</div>
          <div className="sitemap-list">
            <a href="#"> Online Course Creation</a>
            <a href="#"> Online Course Marketing</a>
            <a href="#"> Online Business</a>
            <a href="#"> Teaching English</a>
            <a href="#"> Articulate Storyline</a>
            <a href="#"> Passive Income</a>
            <a href="#"> Adobe Captivate</a>
            <a href="#"> Pencil Drawing</a>
            <a href="#"> Surfing</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Social Science</div>
          <div className="sitemap-list">
            <a href="#"> Psychology</a>
            <a href="#"> Counseling</a>
            <a href="#"> Accounting</a>
            <a href="#"> Critical Thinking</a>
            <a href="#"> Economics</a>
            <a href="#"> Social Psychology</a>
            <a href="#"> Dialectical Behavior Therapy (DBT)</a>
            <a href="#"> Research Methods</a>
            <a href="#"> Psychotherapy</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Language</div>
          <div className="sitemap-list">
            <a href="#"> English Language</a>
            <a href="#"> German Language</a>
            <a href="#"> Japanese Language</a>
            <a href="#"> Spanish Language</a>
            <a href="#"> English Grammar</a>
            <a href="#"> French Language</a>
            <a href="#"> English Conversation</a>
            <a href="#"> IELTS</a>
            <a href="#"> Sign Language</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Teacher Training</div>
          <div className="sitemap-list">
            <a href="#"> Instructional Design</a>
            <a href="#"> Train the Trainer</a>
            <a href="#"> Presentation Skills</a>
            <a href="#"> Online Course Creation</a>
            <a href="#"> Media Training</a>
            <a href="#"> ESL</a>
            <a href="#"> Moodle</a>
            <a href="#"> Voice-Over</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Test Prep</div>
          <div className="sitemap-list">
            <a href="#"> IELTS</a>
            <a href="#"> PMP</a>
            <a href="#"> TOEFL</a>
            <a href="#"> Math</a>
            <a href="#"> GMAT</a>
            <a href="#"> Bookkeeping</a>
            <a href="#"> IIBA Certification</a>
            <a href="#"> SAT</a>
            <a href="#"> GRE</a>
          </div>
        </div>
        <div className="sitemap-container">
          <div className="sitemap-heading-41">Other Teaching & Academics</div>
          <div className="sitemap-list">
            <a href="#"> Research Methods</a>
            <a href="#"> Nutrition</a>
            <a href="#"> Academic Writing</a>
            <a href="#"> Early Childhood Education</a>
            <a href="#"> Drawing</a>
            <a href="#"> Figure Drawing</a>
            <a href="#"> Montessori</a>
            <a href="#"> Data Analysis</a>
            <a href="#"> SPSS</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sitemap;