export default function isbhomeCard({ isbhome }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition duration-300 bg-white min-w-[250px] border-gray-200">
      <div className="relative h-48 w-full">
        <img
          src={isbhome.imageUrl}
          alt={isbhome.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2"></div>
      </div>
      <div className="p-3">
        <p className="font-medium text-sm">{isbhome.title}</p>
        <p className="text-gray-600 text-sm">{isbhome.price}</p>
        <p className="text-gray-800 text-sm">★ {isbhome.rating}</p>
      </div>
    </div>
  );
}
