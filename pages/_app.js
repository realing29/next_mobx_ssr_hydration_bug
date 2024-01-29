import { StoreProvider } from '../components/StoreProvider'
let count = 0
export default function App({ Component, pageProps }) {
	console.log(count++, pageProps)
	return (
		<StoreProvider {...pageProps}>
			<Component {...pageProps} />
		</StoreProvider>
	)
}
