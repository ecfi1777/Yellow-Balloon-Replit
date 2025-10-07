# Repo Audit Report

## Potential issues

### Duplicate images (by content hash)
- None ✅

### Duplicate image filenames (case-insensitive)
- None ✅

### Orphan images (not referenced in code)
- client/public/assets/og-card.svg
- client/public/assets/gallery/other/Fun_styling_braiding_session_8ee3aae6.png

### Orphan source files (not reachable from entrypoints)
- client/src/pages/GlamourParties.tsx
- client/src/pages/LiceTreatment.tsx
- client/src/pages/not-found.tsx
- client/src/pages/Gallery/GlamourPartiesGalleryPage.tsx
- client/src/pages/Gallery/LiceTreatmentGalleryPage.tsx
- client/src/pages/Gallery/MainGalleryPage.tsx
- client/src/lib/utils.ts
- client/src/hooks/use-mobile.tsx
- client/src/hooks/use-toast.ts
- client/src/data/galleries.ts
- client/src/components/Contact.tsx
- client/src/components/Features.tsx
- client/src/components/Footer.tsx
- client/src/components/GalleryCarousel.tsx
- client/src/components/GallerySection.tsx
- client/src/components/Header.tsx
- client/src/components/Hero.tsx
- client/src/components/ImageGrid.tsx
- client/src/components/Pricing.tsx
- client/src/components/Reviews.tsx
- client/src/components/Services.tsx
- client/src/components/ViewMoreButton.tsx
- client/src/components/ui/accordion.tsx
- client/src/components/ui/alert-dialog.tsx
- client/src/components/ui/alert.tsx
- client/src/components/ui/aspect-ratio.tsx
- client/src/components/ui/avatar.tsx
- client/src/components/ui/badge.tsx
- client/src/components/ui/breadcrumb.tsx
- client/src/components/ui/button.tsx
- client/src/components/ui/calendar.tsx
- client/src/components/ui/card.tsx
- client/src/components/ui/carousel.tsx
- client/src/components/ui/chart.tsx
- client/src/components/ui/checkbox.tsx
- client/src/components/ui/collapsible.tsx
- client/src/components/ui/command.tsx
- client/src/components/ui/context-menu.tsx
- client/src/components/ui/dialog.tsx
- client/src/components/ui/drawer.tsx
- client/src/components/ui/dropdown-menu.tsx
- client/src/components/ui/form.tsx
- client/src/components/ui/hover-card.tsx
- client/src/components/ui/input-otp.tsx
- client/src/components/ui/input.tsx
- client/src/components/ui/label.tsx
- client/src/components/ui/menubar.tsx
- client/src/components/ui/navigation-menu.tsx
- client/src/components/ui/pagination.tsx
- client/src/components/ui/popover.tsx
- client/src/components/ui/progress.tsx
- client/src/components/ui/radio-group.tsx
- client/src/components/ui/resizable.tsx
- client/src/components/ui/scroll-area.tsx
- client/src/components/ui/select.tsx
- client/src/components/ui/separator.tsx
- client/src/components/ui/sheet.tsx
- client/src/components/ui/sidebar.tsx
- client/src/components/ui/skeleton.tsx
- client/src/components/ui/slider.tsx
- client/src/components/ui/switch.tsx
- client/src/components/ui/table.tsx
- client/src/components/ui/tabs.tsx
- client/src/components/ui/textarea.tsx
- client/src/components/ui/toast.tsx
- client/src/components/ui/toaster.tsx
- client/src/components/ui/toggle-group.tsx
- client/src/components/ui/toggle.tsx
- client/src/components/ui/tooltip.tsx
- client/src/components/examples/Contact.tsx
- client/src/components/examples/Features.tsx
- client/src/components/examples/Footer.tsx
- client/src/components/examples/Gallery.tsx
- client/src/components/examples/Header.tsx
- client/src/components/examples/Hero.tsx
- client/src/components/examples/Services.tsx

### Naming suggestions (components)
- client/src/components/ui/accordion.tsx → Accordion.tsx
- client/src/components/ui/alert-dialog.tsx → AlertDialog.tsx
- client/src/components/ui/alert.tsx → Alert.tsx
- client/src/components/ui/aspect-ratio.tsx → AspectRatio.tsx
- client/src/components/ui/avatar.tsx → Avatar.tsx
- client/src/components/ui/badge.tsx → Badge.tsx
- client/src/components/ui/breadcrumb.tsx → Breadcrumb.tsx
- client/src/components/ui/button.tsx → Button.tsx
- client/src/components/ui/calendar.tsx → Calendar.tsx
- client/src/components/ui/card.tsx → Card.tsx
- client/src/components/ui/carousel.tsx → Carousel.tsx
- client/src/components/ui/chart.tsx → Chart.tsx
- client/src/components/ui/checkbox.tsx → Checkbox.tsx
- client/src/components/ui/collapsible.tsx → Collapsible.tsx
- client/src/components/ui/command.tsx → Command.tsx
- client/src/components/ui/context-menu.tsx → ContextMenu.tsx
- client/src/components/ui/dialog.tsx → Dialog.tsx
- client/src/components/ui/drawer.tsx → Drawer.tsx
- client/src/components/ui/dropdown-menu.tsx → DropdownMenu.tsx
- client/src/components/ui/form.tsx → Form.tsx
- client/src/components/ui/hover-card.tsx → HoverCard.tsx
- client/src/components/ui/input-otp.tsx → InputOtp.tsx
- client/src/components/ui/input.tsx → Input.tsx
- client/src/components/ui/label.tsx → Label.tsx
- client/src/components/ui/menubar.tsx → Menubar.tsx
- client/src/components/ui/navigation-menu.tsx → NavigationMenu.tsx
- client/src/components/ui/pagination.tsx → Pagination.tsx
- client/src/components/ui/popover.tsx → Popover.tsx
- client/src/components/ui/progress.tsx → Progress.tsx
- client/src/components/ui/radio-group.tsx → RadioGroup.tsx
- client/src/components/ui/resizable.tsx → Resizable.tsx
- client/src/components/ui/scroll-area.tsx → ScrollArea.tsx
- client/src/components/ui/select.tsx → Select.tsx
- client/src/components/ui/separator.tsx → Separator.tsx
- client/src/components/ui/sheet.tsx → Sheet.tsx
- client/src/components/ui/sidebar.tsx → Sidebar.tsx
- client/src/components/ui/skeleton.tsx → Skeleton.tsx
- client/src/components/ui/slider.tsx → Slider.tsx
- client/src/components/ui/switch.tsx → Switch.tsx
- client/src/components/ui/table.tsx → Table.tsx
- client/src/components/ui/tabs.tsx → Tabs.tsx
- client/src/components/ui/textarea.tsx → Textarea.tsx
- client/src/components/ui/toast.tsx → Toast.tsx
- client/src/components/ui/toaster.tsx → Toaster.tsx
- client/src/components/ui/toggle-group.tsx → ToggleGroup.tsx
- client/src/components/ui/toggle.tsx → Toggle.tsx
- client/src/components/ui/tooltip.tsx → Tooltip.tsx

## Notes
- Orphans can be false positives if referenced dynamically at runtime.
- If your images live under client/src/assets and are imported, this script won't see them as public URLs; consider moving them to client/public for stable paths or extending the script.