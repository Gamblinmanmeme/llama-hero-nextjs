import Header from '../components/Header';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import FeatureCard from '../components/FeatureCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ImageExample from '../components/ImageExample';
import { ShieldCheck, Scale, FileText, Clock, Car, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Image Testing Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Image Loading Solutions</h2>
          <ImageExample />
        </div>
      </section>
      
      {/* What is a GM Buyback */}
      <InfoSection id="what-is" title="What is a GM Buyback?">
        <p className="mb-6">
          A GM Buyback refers to a situation where General Motors repurchases a vehicle from its owner due to persistent defects or issues that cannot be resolved after multiple repair attempts. This process is typically governed by state lemon laws and manufacturer warranty policies.
        </p>
        <p className="mb-6">
          When a vehicle experiences recurring problems that substantially impair its use, value, or safety, and these issues cannot be fixed after a reasonable number of repair attempts, the owner may be eligible for a buyback. This means GM will repurchase the vehicle at a fair price, often including reimbursement for payments made, minus a reasonable allowance for use.
        </p>
        <p>
          Buybacks are an important consumer protection mechanism that ensures manufacturers stand behind their products and provides recourse for owners of defective vehicles.
        </p>
      </InfoSection>
      
      {/* Key Features */}
      <div className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Aspects of GM Buybacks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Legal Protection" 
              icon={<ShieldCheck />}
            >
              <p>Buybacks are typically protected under state lemon laws, which vary by location but generally provide similar consumer protections.</p>
            </FeatureCard>
            
            <FeatureCard 
              title="Fair Compensation" 
              icon={<Scale />}
            >
              <p>Owners are entitled to fair compensation, including reimbursement for payments, registration fees, and other expenses minus a usage allowance.</p>
            </FeatureCard>
            
            <FeatureCard 
              title="Documentation" 
              icon={<FileText />}
            >
              <p>Proper documentation of all repairs, service visits, and communications with the dealership is crucial for a successful buyback claim.</p>
            </FeatureCard>
            
            <FeatureCard 
              title="Timeframe" 
              icon={<Clock />}
            >
              <p>Buyback processes can take time, often several weeks to months, depending on the complexity of the case and the manufacturer's response.</p>
            </FeatureCard>
            
            <FeatureCard 
              title="Vehicle History" 
              icon={<Car />}
            >
              <p>Vehicles that have been bought back may be resold with proper disclosure of their history, often referred to as "lemon branded."</p>
            </FeatureCard>
            
            <FeatureCard 
              title="Repair Attempts" 
              icon={<Wrench />}
            >
              <p>Most lemon laws require a "reasonable number" of repair attempts (typically 3-4) before a vehicle qualifies for a buyback.</p>
            </FeatureCard>
          </div>
        </div>
      </div>
      
      {/* Eligibility */}
      <InfoSection id="eligibility" title="Eligibility for a GM Buyback">
        <p className="mb-6">
          Not all vehicle issues qualify for a buyback. To be eligible for a GM buyback under most state lemon laws, your situation typically needs to meet the following criteria:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>The vehicle has a substantial defect covered by the warranty that occurred within a certain period after delivery.</li>
          <li>The defect could not be fixed after a reasonable number of repair attempts (usually 3-4 attempts for the same issue).</li>
          <li>The vehicle has been out of service for repairs for a cumulative total of 30 days or more.</li>
          <li>The defect substantially impairs the vehicle's use, value, or safety.</li>
          <li>You have maintained proper documentation of all repair attempts, including dates and descriptions of the problems.</li>
        </ul>
        
        <p>
          It's important to note that eligibility requirements can vary by state, as lemon laws differ across jurisdictions. Consulting with a consumer protection attorney familiar with lemon laws in your state can help determine if your situation qualifies for a buyback.
        </p>
      </InfoSection>
      
      {/* Process */}
      <InfoSection id="process" title="The GM Buyback Process" bgColor="bg-gray-100">
        <ol className="list-decimal pl-6 mb-6 space-y-4">
          <li>
            <strong>Document Everything:</strong> Keep detailed records of all repairs, including dates, descriptions of problems, and copies of work orders.
          </li>
          <li>
            <strong>Notify the Manufacturer:</strong> Send a formal written notification to GM about the recurring issues and your request for a buyback.
          </li>
          <li>
            <strong>File a Claim:</strong> If GM doesn't respond satisfactorily, file a claim through your state's consumer protection agency or consider arbitration.
          </li>
          <li>
            <strong>Arbitration or Legal Action:</strong> Participate in arbitration if available, or consult with an attorney about filing a lawsuit if necessary.
          </li>
          <li>
            <strong>Settlement and Buyback:</strong> If successful, negotiate the terms of the buyback, including the repurchase amount and timing.
          </li>
          <li>
            <strong>Vehicle Return:</strong> Complete the necessary paperwork and return the vehicle to GM or the designated dealership.
          </li>
        </ol>
        
        <p>
          The entire process can take several weeks to months, depending on the complexity of your case and GM's response. Having professional guidance can often help expedite the process and ensure you receive fair compensation.
        </p>
      </InfoSection>
      
      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About GM Buybacks?</h2>
            <p className="text-xl mb-6">
              Our team of experts is ready to help you understand your options and guide you through the buyback process.
            </p>
            <p className="mb-8">
              Whether you're experiencing issues with your GM vehicle or just want to learn more about the buyback process, we're here to provide the information you need.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p className="mb-2"><strong>Email:</strong> info@gmbuybackinfo.com</p>
              <p><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}