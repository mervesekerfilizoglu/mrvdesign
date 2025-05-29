export default function ContactPage() {
  return (
    <form className="max-w-md mx-auto p-4 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Adınız"
        className="border rounded p-2 focus:outline-blue-400"
      />
      <input
        type="email"
        placeholder="E-posta"
        className="border rounded p-2 focus:outline-blue-400"
      />
      <textarea
        rows="4"
        placeholder="Mesajınız"
        className="border rounded p-2 focus:outline-blue-400"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Gönder
      </button>
    </form>
  );
}
