import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
// import { useSubscription } from '@/hooks/useSubscription'

type Props = {}

// WIP: need to hook the business logic here

const PaymentButton = (props: Props) => {
	// const { onSubscribe, isProcessing } = useSubscription()

	const onSubscribe = () => {}
	const isProcessing = false

	return (
		<Button className="text-sm w-full " onClick={onSubscribe}>
			<Loader color="#000" state={isProcessing}>
				Upgrade
			</Loader>
		</Button>
	)
}

export default PaymentButton
