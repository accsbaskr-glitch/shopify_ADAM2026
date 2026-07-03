export function Footer() {
    return (
        <footer className="bg-muted/30 py-12 border-t">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-xl font-museo-moderno">ADAM</span>
                    <span className="text-muted-foreground text-sm">© 2024</span>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                    <a href="#" className="hover:text-primary">Contact</a>
                </div>
            </div>
        </footer>
    );
}
