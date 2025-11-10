'use client'
import { useEffect, useState } from 'react'
import { supabase } from "@/lib/supabaseClient"

export default function TestPage() {
    const [status, setStatus] = useState('Checking connection...')

    useEffect(() => {
        const testConnection = async () => {
            const { data, error } = await supabase.from('hotels').select('*').limit(1)
            if (error) {
                console.error('❌ Supabase connection error:', error)
                setStatus('❌ Connection failed — check console')
            } else {
                console.log('✅ Supabase connection successful:', data)
                setStatus('✅ Connection successful!')
            }
        }
        testConnection()
    }, [])

    return (
        <main style={{ padding: '3rem', textAlign: 'center' }}>
            <h1>Supabase Connection Test</h1>
            <p>{status}</p>
        </main>
    )
}
