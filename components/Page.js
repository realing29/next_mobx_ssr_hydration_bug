import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Button, Flex } from '@chakra-ui/react'
import Router from 'next/router'

const Page = observer(function Page(props) {
	// use store from the store context
	const store = useStore()

	const photos = store.photos
	return (
		<div>
			<h1>{props.title}</h1>
			<Flex as='nav' gap='10px'>
				<Button
					p='10px'
					bg='gray.200'
					overflow='hidden'
					borderRadius='10px'
					border='2px solid'
					onClick={() => {
						Router.push(`1`)
					}}
					_hover={{ filter: 'brightness(95%)' }}
				>
					first
				</Button>
				<Button
					p='10px'
					bg='gray.200'
					overflow='hidden'
					borderRadius='10px'
					border='2px solid'
					onClick={() => {
						Router.push(`2`)
					}}
					_hover={{ filter: 'brightness(95%)' }}
				>
					two
				</Button>
			</Flex>
			{/* <div>{JSON.stringify(photos)}</div> */}
		</div>
	)
})

export default Page
