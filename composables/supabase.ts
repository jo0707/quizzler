import type { Database } from "~/types/Database"
import type { GameMode } from "~/types/Game"

export const useSupabase = () => {
  const supabase = useSupabaseClient<Database>()

  async function setLeaderboard(name: string, score: number, time: number, mode: GameMode) {
    const { error } = await supabase.from("leaderboard").insert([{ name, score, time, mode }])

    if (error) {
      console.error(error)
      throw error
    }
  }

  async function getLeaderboard(mode: GameMode) {
    const { data, error } = await supabase
      .from("leaderboard")
      .select("*")
      .eq("mode", mode)
      .order("score", { ascending: false })
      .limit(10)

      console.log(data);
      console.log(error);
      
      

    if (error) {
      console.error(error)
      throw error
    }

    return data
  }

  return { setLeaderboard, getLeaderboard }
}
