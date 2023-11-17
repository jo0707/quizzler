export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      leaderboard: {
        Row: {
          created_at: string
          id: number
          mode: string
          name: string | null
          score: number
          time: number
        }
        Insert: {
          created_at?: string
          id?: number
          mode?: string
          name?: string | null
          score?: number
          time?: number
        }
        Update: {
          created_at?: string
          id?: number
          mode?: string
          name?: string | null
          score?: number
          time?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
