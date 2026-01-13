import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type React from "react"
import type { MouseEventHandler } from "react"

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
    textButton?: string,
    close?: string
    ok?: string
    icon?: React.ReactNode
    form?: string
    buttonClass?: string
    buttonVariant?: "outline" | "link" | "default" | "destructive" | "secondary" | "ghost"
    okVariant?: "outline" | "link" | "default" | "destructive" | "secondary" | "ghost"
    okOnClick?: MouseEventHandler<HTMLButtonElement>
}

export default function DialogComponet({ children, textButton, title, description, close = 'Close', ok = "ok", icon, form, buttonClass, buttonVariant = 'outline', okOnClick, okVariant }: Props) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className={buttonClass} variant={buttonVariant}>{icon && icon}{textButton}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        {title && <DialogTitle>{title}</DialogTitle>}
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                    {children}
                    <DialogFooter>
                        <DialogClose asChild>
                            {close && <Button variant="outline">{close}</Button>}
                        </DialogClose>
                        <Button form={form} type="submit" variant={okVariant} onClick={okOnClick}>{ok}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}