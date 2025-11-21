import { skills } from '@/data'

export default function Skills() {
    const skillCategories = {
        frontend: skills.filter(skill => skill.category === 'frontend'),
        backend: skills.filter(skill => skill.category === 'backend'),
        tools: skills.filter(skill => skill.category === 'tools'),
    }

    return (
        <section id="skills" className="pt-20 bg-gray-50 dark:bg-[#2E073F]">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Technologies
            </h2>
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 capitalize">
                    {category}
                    </h3>
                    <div className="space-y-4">
                    {categorySkills.map((skill) => (
                        <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}