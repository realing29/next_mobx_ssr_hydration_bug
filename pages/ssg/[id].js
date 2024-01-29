import Page from '../../components/Page'
import { http } from '../../http'

export default function SSG() {
	return <Page title='Index Page' linkTo='/other' />
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export async function getStaticProps(context) {
	const { params } = context
	const { id } = params

	const { data } = await http.get(
		`https://jsonplaceholder.typicode.com/albums/${id}/photos`,
	)
	//! the more copies, the more re-renders
	const copies = 20
	return {
		props: {
			hydrationData: new Array(Math.floor(copies)).fill(data),
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	}
}
