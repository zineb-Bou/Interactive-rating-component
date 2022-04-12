export default function RoundedBtn({ children, onClick }) {
  return (
    <button
      className="bg-DarkBlue text-MediumGrey rounded-full border-none px-4 py-2 cursor-pointer hover:bg-LightGrey hover:text-White focus:bg-Orange focus:text-White"
      onClick={onClick}
      aria-label={`${children} star`}
    >
      {children}
    </button>
  );
}
