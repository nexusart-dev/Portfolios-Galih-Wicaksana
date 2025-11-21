import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        console.log('📧 Attempting to send email...')
        console.log('Environment check:', process.env.GMAIL_APP_PASSWORD ? '✅ Password found' : '❌ Password NOT found')

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'galihwicaksananame@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD
            }
        })

        await transporter.verify()
        console.log('✅ SMTP connection verified')

        const mailOptions = {
            from: 'galihwicaksananame@gmail.com',
            replyTo: email,
            to: 'galihwicaksananame@gmail.com',
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                    <h2 style="color: #9C19E0; border-bottom: 2px solid #9C19E0; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    </div>
                    <div style="margin-top: 20px;">
                        <p style="margin: 10px 0;"><strong>Message:</strong></p>
                        <p style="line-height: 1.6; color: #333;">${message}</p>
                    </div>
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                    <p style="color: #999; font-size: 12px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `
        }

        const info = await transporter.sendMail(mailOptions)
        console.log('✅ Email sent successfully:', info.messageId)

        return NextResponse.json({ 
            message: 'Email sent successfully',
            messageId: info.messageId 
        }, { status: 200 })
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('❌ Error sending email:', error)
        return NextResponse.json(
            { 
                error: 'Failed to send email',
                details: error.message 
            },
            { status: 500 }
        )
    }
}