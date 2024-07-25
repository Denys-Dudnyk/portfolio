import Image from 'next/image'
import { useEffect, useRef } from 'react'

const ImageOrVideo = ({ src }: { src: string }) => {
	const isImage = src.endsWith('.png')

	const videoRef = useRef(null)

	useEffect(() => {
		if (videoRef.current) {
			// @ts-ignore
			videoRef.current.play()
		}
	}, [])

	return (
		<>
			{isImage ? (
				<Image
					width={1000}
					height={1000}
					src={src}
					alt='Project I worked on'
					quality={95}
					className='top-8 mdMin:-right-1 absolute mdMin:rounded-l-lg  smMin:w-[30.25rem] smMax:w-full responsive lgMax:top-7 '
				/>
			) : (
				<video
					ref={videoRef}
					autoPlay
					width={1000}
					height={1000}
					loop
					muted
					onClick={() => window.open(src, '_blank')}
					className='top-8 mdMin:-right-1 absolute mdMin:rounded-l-lg  smMin:w-[30.25rem] smMax:w-full responsive lgMax:top-7 '
					title='Click to open'
				>
					<source src={src} type='video/mp4' />
				</video>
			)}
		</>
	)
}

export default ImageOrVideo
