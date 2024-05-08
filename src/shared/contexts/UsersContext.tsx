import React from "react"

interface UsersProviderProps {
  children: React.ReactNode
}

interface UsersContextType {
  photoUri: string | null;
  editPhoto: (uri: string) => void;
}

export const UsersContext = React.createContext<UsersContextType>({
  photoUri: null,
  editPhoto: (uri: string) => {}
})

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [photoUri, setPhoto] = React.useState<string | null>(null)

  const handlePhoto = (uri: string) => {
    setPhoto(uri)
  }

  return (
    <UsersContext.Provider value={{ photoUri, editPhoto: handlePhoto }}>
      {children}
    </UsersContext.Provider>
  )
}
