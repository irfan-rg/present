const Message: React.FC = () => (
  <section className="min-h-screen flex items-center justify-center bg-secondary text-center">
    <div className="w-full max-w-6xl px-4 sm:px-8">
      <h2 className="cormorant-heading text-text mb-4 sm:mb-16 text-center font-light text-2xl sm:text-5xl">
        From My Heart
      </h2>
      <div className="p-4 sm:p-8 bg-secondary rounded-lg shadow-lg">
        <p className="text-base sm:text-xl font-montserrat text-primary italic">
          Dear [Friend's Name],<br /><br />
          Your friendship is a gift I cherish every day. Your laughter, kindness, and unstoppable spirit light up my world. Here's to celebrating you and all the incredible moments we'll share in the future.<br /><br />
          With all my love,<br />
          [Your Name]
        </p>
      </div>
    </div>
  </section>
);

export default Message;