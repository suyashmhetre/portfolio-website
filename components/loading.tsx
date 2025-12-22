export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#C2542D] border-t-transparent rounded-full animate-spin" />
        <p className="oh-label text-[#4a4640]">Loading...</p>
      </div>
    </div>
  )
}