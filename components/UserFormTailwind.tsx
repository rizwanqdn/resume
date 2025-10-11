// components/UserFormTailwind.tsx
"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

const UserFormTailwind: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.address.trim()) {
      setSubmissionStatus('Please fill in both name and address fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Form submission successful:', data);
        setSubmissionStatus('Form submitted successfully!');
        setFormData({ name: '', address: '' }); // Clear form
      } else {
        console.error('Form submission failed:', data.message);
        setSubmissionStatus(`Submission failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      setSubmissionStatus('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"> {/* Using primary and accent for background */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-neutral-100 transform hover:scale-105 transition duration-300 ease-in-out">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-8 text-center tracking-tight leading-tight">
          Connect with Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-neutral-700 mb-2">
              Your Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-xl shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-base transition duration-200 ease-in-out bg-neutral-50 text-neutral-900 leading-tight"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-base font-semibold text-neutral-700 mb-2">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              aria-required="true"
              className="appearance-none block w-full px-4 py-3 border border-neutral-300 rounded-xl shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-base transition duration-200 ease-in-out bg-neutral-50 text-neutral-900 leading-tight"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out transform hover:-translate-y-0.5"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit Information'
            )}
          </button>
        </form>

        {submissionStatus && (
          <p
            className={`mt-6 text-center text-base font-medium ${
              submissionStatus.includes('successfully') ? 'text-success' : 'text-danger'
            }`}
          >
            {submissionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserFormTailwind;