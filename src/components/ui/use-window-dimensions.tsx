"use client"

import { useLayoutEffect, useMemo, useState } from "react"

export function useWindowDimension() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        })
    }, [])

    const isMobile = useMemo(() => {
        if (dimensions.width < 786) {
            return true
        }

        return false
    }, [dimensions.width])

    return { isMobile }
}