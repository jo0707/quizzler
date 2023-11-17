export const useCustomToast = () => {
  const toast = useToast()

  function success(title: string, description?: string) {
    toast.add({
      title: title,
      description: description,
      color: "green",
      icon: "i-heroicons-check-circle-solid",
    })
  }

  function error(title: string, description?: string) {
    toast.add({
      title: title,
      description: description,
      color: "red",
      icon: "i-heroicons-x-circle-solid",
    })
  }

  return { success, error }
}
