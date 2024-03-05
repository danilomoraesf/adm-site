// "use client"
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserContainer from "@/containers/user";
import PostsContainer from "@/containers/posts";
import MemosContainer from "@/containers/memos";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MemosContainer.Provider>
        <PostsContainer.Provider>
          <UserContainer.Provider>
            <Component {...pageProps} />
          </UserContainer.Provider>
        </PostsContainer.Provider>
      </MemosContainer.Provider>
    </>
  )
}



