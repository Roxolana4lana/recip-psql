import Link from 'next/link'

export default function Nav() {
    return (
        <p className="fixed flex flex-row left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
            <span className="m-1 mr-10">
                <Link href={`/`}>HOME </Link>
            </span>
            <span className="m-1">
                <Link href={`/charts`}> CHARTS</Link>
            </span>
        </p>
    )
}