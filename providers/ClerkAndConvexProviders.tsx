import { tokenCache } from "@/cache";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient} from "convex/react"


const convex= new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
})

const publishablekey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishablekey) {
  throw new Error(
    "Missinh Publishable Key, Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env"
  )
}

export default function ClerkAndConvexProviders({children} :{children: React.ReactNode}) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishablekey}>
        <ConvexProviderWithClerk useAuth ={useAuth} client={convex}>
            <ClerkLoaded> {children}</ClerkLoaded>
        </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}