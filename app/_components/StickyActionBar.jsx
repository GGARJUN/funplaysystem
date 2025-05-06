import { Button } from "@/components/ui/button";

export default function StickyActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-indigo-600 text-white py-4 px-6 shadow-lg z-50">
      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-5xl mx-auto">
        <Button className="bg-green-500 hover:bg-green-600 rounded-full px-6 py-2 text-lg">
          Chat on WhatsApp
        </Button>
        <Button className="bg-blue-700 hover:bg-blue-800 rounded-full px-6 py-2 text-lg">
          Live Chat
        </Button>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6 py-2 text-lg">
          Quick Quote Form
        </Button>
      </div>
    </div>
  );
}