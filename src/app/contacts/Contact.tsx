'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from '@/components/icons';
import ButtonSend from '@/components/atoms/ButtonSend'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus({ type: '', message: '' })

        try {
            console.log('Sending request to API...', formData)
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            console.log('API Response:', data)

            if (response.ok) {
                setStatus({ 
                    type: 'success', 
                    message: 'Message sent successfully! I will contact you soon.' 
                })
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error(data.error || 'Failed to send message')
            }
        } catch (error) {
            console.error('Error sending message:', error)
            setStatus({ 
                type: 'error', 
                message: 'Gagal mengirim pesan. Silakan coba lagi atau email langsung ke galihwicaksananame@gmail.com' 
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Get In Touch
                </h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Let&apos;s work together
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                I&apos;m always interested in new opportunities and exciting projects. 
                                Whether you have a question or just want to say hi, feel free to 
                                reach out!
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Mail className="h-5 w-5 text-purple-500" />
                                    <a href="mailto:galihwicaksananame@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
                                        galihwicaksananame@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-5 w-5 text-purple-500" />
                                    <a href="tel:+6289709606750" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
                                        +62 897 096 0675
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="h-5 w-5 text-purple-500" />
                                    <span className="text-gray-600 dark:text-gray-300">Mojokerto, Jawa Timur</span>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status.message && (
                                <div className={`p-4 rounded-md border ${
                                    status.type === 'success' 
                                        ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800' 
                                        : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800'
                                }`}>
                                    {status.message}
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white resize-none"
                                    required
                                    disabled={isLoading}
                                ></textarea>
                            </div>
                            <ButtonSend isLoading={isLoading} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}