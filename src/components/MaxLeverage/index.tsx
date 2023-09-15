import classnames from 'classnames'

import './style.css'

type MaxLeverageProps = {
    maxLeverage: number | undefined,
    leverageInfo: string | undefined,
    className: string
};

export const MaxLeverage = ({ maxLeverage, leverageInfo, className } : MaxLeverageProps) => {
    if (!maxLeverage) return null

    const maxLeverageBlock = (
        <div
            className={classnames("card-leverage", className)}
            title="Maximum leverage on this platform"
        >
            <span className="leverage-value">
                x{maxLeverage}
            </span>
            <span className="leverage-label">leverage</span>
        </div>
    )

    if (!leverageInfo)
        return maxLeverageBlock

    return (
        <a
            href={leverageInfo}
            className="leverage-link"
            target="_blank"
        >
            { maxLeverageBlock }
        </a>
    )
}
