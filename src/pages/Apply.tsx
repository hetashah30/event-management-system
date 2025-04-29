
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/apply/ApplicationForm';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-elevate-purple py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Apply for Event Planning</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to elevate your next event? Fill out the form below with your event details, and our team will get in touch to discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <ApplicationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
