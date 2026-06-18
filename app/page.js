export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MedMinder Companion
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Never miss a dose again. Simple alerts for seniors, peace of mind for caregivers.
          </p>
          <div className="space-x-4">
            <a href="/reminders" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition">
              Get Started
            </a>
            <a href="/caregiver" className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition">
              Learn How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How It Helps
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Timely Alerts</h3>
              <p className="text-gray-600">
                Customizable reminders sound at the right time, so medications are taken as prescribed.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Caregiver Notifications</h3>
              <p className="text-gray-600">
                If a dose is missed, an automatic SMS or email alert goes to the designated caregiver.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Simple Setup</h3>
              <p className="text-gray-600">
                No complicated apps. Just set the schedule once and let MedMinder handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to improve medication adherence?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join hundreds of families who trust MedMinder Companion to keep their loved ones safe.
          </p>
          <a href="/reminders" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition">
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}