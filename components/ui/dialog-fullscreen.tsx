"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

function DialogFullscreen({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogFullscreenTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogFullscreenClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

function DialogFullscreenPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogFullscreenOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-[100] bg-black/70 backdrop-blur-md",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

interface DialogFullscreenContentProps extends React.ComponentProps<
  typeof DialogPrimitive.Content
> {
  showCloseButton?: boolean;
}

function DialogFullscreenContent({
  children,
  className,
  showCloseButton = true,
  ...props
}: DialogFullscreenContentProps) {
  return (
    <DialogFullscreenPortal>
      <DialogFullscreenOverlay />

      <DialogPrimitive.Content
        className={cn(
          `
          fixed
          inset-0
          z-[101]

          flex
          items-center
          justify-center

          p-3

          lg:p-8
          `,
          className,
        )}
        {...props}
      >
        <div
          className="
            relative

            h-[96vh]

            w-full

            max-w-[1500px]

            overflow-hidden

            rounded-[32px]

            bg-slate-100

            shadow-[0_30px_80px_rgba(0,0,0,.45)]
          "
        >
          {showCloseButton && (
            <DialogPrimitive.Close asChild>
              <button
                className="
                  absolute

                  right-6

                  top-6

                  z-50

                  flex

                  h-12

                  w-12

                  items-center

                  justify-center

                  rounded-full

                  bg-white

                  shadow-xl

                  transition

                  hover:rotate-90

                  hover:scale-105
                "
              >
                <X className="h-5 w-5" />
              </button>
            </DialogPrimitive.Close>
          )}

          {children}
        </div>
      </DialogPrimitive.Content>
    </DialogFullscreenPortal>
  );
}

export {
  DialogFullscreen,
  DialogFullscreenTrigger,
  DialogFullscreenContent,
  DialogFullscreenClose,
};
