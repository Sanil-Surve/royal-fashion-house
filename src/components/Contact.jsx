const Contact = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Visit Our Store
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto ">
            We look forward to welcoming you at our store. Here’s where you can
            find us and our operating hours.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Our Location</h3>
            <p className="mt-4 text-lg text-white">
              Ajay Salvi <br />
              9657163540 <br />
              Royal Fashion House 
              <br />
              Senapati kapshi Santaji Chowk, Kagal, Kolhapur 416218
            </p>
            <iframe
              className="mt-4 w-full h-64 rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.8006062616723!2d74.28137887460518!3d16.333129332320127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f57828d77a69%3A0x4b047a6fb5598b12!2sROYAL%20FASHION%20HOUSE!5e0!3m2!1sen!2sin!4v1724435615219!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Opening Hours</h3>
            <ul className="mt-4 text-lg text-white">
              <li className="flex justify-between py-2">
                <span>Monday - Sunday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Public Holidays:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
