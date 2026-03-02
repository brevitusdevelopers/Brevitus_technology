import Link from "next/link";

export default function Internships() {
  return (
    <div className="flex min-h-screen flex-col items-center py-20 px-8">
      <h1 className="text-4xl font-bold mb-8">Internships</h1>
      
      <section className="mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Why Our Internships?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Project-based</li>
          <li>Mentor-guided</li>
          <li>Skill certification</li>
          <li>Portfolio-ready outcomes</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Student Journey</h2>
        <p className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-md text-center font-medium">
          Apply → Learn → Build → Showcase → Get Internship Certificate
        </p>
      </section>
    </div>
  );
}