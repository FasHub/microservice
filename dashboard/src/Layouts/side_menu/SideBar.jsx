import Nav from "./Nav";

function TopBar() {
  const navItems = [
      { href: "/", label: "Dashboard", subMenu: [], icon: 'dashboard', active: true },
      {
           href: "/page", label: "Pages", subMenu: [
              { href: "/starter", label: "Starter", subMenu: [], icon: "starter", active: false },
              { href: "/login", label: "Login", subMenu: [], icon: "login", active: true },
              { href: "/registration", label: "Registration", subMenu: [], "icon": "registration", active: false },
              { href: "/forgot-password", label: "Forgot Password", subMenu: [], icon: "forget_question", active: false },
              { href: "/reset-password", label: "Reset Password", subMenu: [], icon: "reset", active: false },
              { href: "/locked-user", label: "Locked User", subMenu: [], icon: "locked_user", active: false },
              { href: "/code-verification", label: "Code Verification", subMenu: [], icon: "password", active: false },
              { href: "/check-your-email", label: "Check Your Email", subMenu: [], icon: "check_email", active: false },
              { href: "/time-line", label: "Time Line", subMenu: [], icon: "timeline", active: false },
              { href: "/pricing", label: "Pricing", subMenu: [], icon: "payment", active: false },
              { href: "billing", label: "Billing", subMenu: [], icon: "receipt", active: false },
              { href: "/404", label: "Error 404", subMenu: [], icon: "warning", active: false },
              { href: "/500", label: "Error 500", subMenu: [], icon: "error", active: false },
              { href: "/faqs", label: "FAQs", subMenu: [], icon: "quiz", active: false },
              { href: "/gallery", label: "Gallery", subMenu: [], icon: "images-outline", active: false },
              { href: "/maintenance", label: "Maintenance", subMenu: [], icon: "engineering", active: false },
              { href: "/coming-soon", label: "Coming Soon", subMenu: [], icon: "footsteps-outline", active: false },
              { href: "/setting", label: "Setting", subMenu: [], icon: "setting", active: false },
          ], icon: 'documents-outline'
      },
      {
           href: "#", label: "Applications", subMenu: [
              { href: "/Kanban", label: "Kanban", subMenu: [], icon: "kanban", active: false },
              { href: "/email-inbox", label: "Email Inbox", subMenu: [], icon: "email_inbox", active: false },
              { href: "/calendar", label: "Calendar", subMenu: [], icon: "calendar", active: false },
              { href: "/chat", label: "Chat", subMenu: [], icon: "chat_google", active: false },
              { href: "/projects", label: "Projects", subMenu: [], icon: "tactic", active: false },
              { href: "/invoice", label: "Invoice", subMenu: [], icon: "receipt-outline", active: false },
              { href: "/member-list", label: "Member List", subMenu: [], icon: "loyalty", active: false },
              { href: "/profile", label: "Profile", subMenu: [], icon: "profile", active: false },
              { href: "/form", label: "Form", subMenu: [], icon: "form", active: false },
          ], icon: 'apps-outline'
      },
      {
           href: "#", label: "Inputs", subMenu: [
              { href: "/text-field", label: "Text Field", subMenu: [], icon: "text_fields", active: false },
              { href: "/text-area", label: "Text Area", subMenu: [], icon: "text_area", active: false },
              { href: "/select", label: "Select", subMenu: [], icon: "select", active: false },
              { href: "/multi-select", label: "Multi-Select", subMenu: [], icon: "multi-select", active: false },
              { href: "/checkbox", label: "Checkbox", subMenu: [], icon: "check_box", active: false },
              { href: "/radio", label: "Radio", subMenu: [], icon: "radio_button", active: false },
              { href: "/time-picker", label: "Time Picker", subMenu: [], icon: "time-outline", active: false },
              { href: "/date-picker", label: "Date Picker", subMenu: [], icon: "calendar-clear-outline", active: false },
              { href: "/date-range-picker", label: "Date Range Picker", subMenu: [], icon: "calendar-outline", active: false },
              { href: "/date-time-picker", label: "Date-Time Picker", subMenu: [], icon: "date_time", active: false },
              { href: "/slider", label: "Slider", subMenu: [], icon: "slider", active: false },
              { href: "/range", label: "Range", subMenu: [], icon: "range", active: false },
              { href: "/button", label: "Button", subMenu: [], icon: "touch", active: false },
              { href: "/rating", label: "Rating", subMenu: [], icon: "star-half-outline", active: false },
              { href: "/switch", label: "Switch", subMenu: [], icon: "toggle-outline", active: false },
          ], icon: 'input'
      },
      {
           href: "#", label: "Data Display", subMenu: [
              { href: "/avatar", label: "Avatar", subMenu: [], icon: "avatar", active: false },
              { href: "/badges", label: "Badges", subMenu: [], icon: "badge", active: false },
              { href: "/chips", label: "Chips", subMenu: [], icon: "chip", active: false },
              { href: "/list", label: "List", subMenu: [], icon: "list", active: false },
              { href: "/tooltip", label: "Tooltip", subMenu: [], icon: "tooltip", active: false },
          ], icon: 'tv-outline'
      },
      {
           href: "#", label: "Feedback", subMenu: [
              { href: "/alerts", label: "Alerts", subMenu: [], icon: "alert-circle-outline", active: false },
              { href: "/dialogs", label: "Dialogs", subMenu: [], icon: "dialogs", active: false },
              { href: "/progress", label: "Progress", subMenu: [], icon: "progress", active: false },
              { href: "/spinners", label: "Spinners", subMenu: [], icon: "spinner", active: false },
              { href: "/snack-bar", label: "Snack-bar", subMenu: [], icon: "text", active: false },
              { href: "/modals", label: "Modals", subMenu: [], icon: "modal", active: false },
              { href: "/offcanvas", label: "Offcanvas", subMenu: [], icon: "off-canvas", active: false },
              { href: "/toasters", label: "Toasters", subMenu: [], icon: "toast", active: false },
          ], icon: 'feedback'
      },
      {
           href: "#", label: "Navigation", subMenu: [
              { href: "/breadcrumb", label: "Breadcrumb", subMenu: [], icon: "breadcrumb", active: false },
              { href: "/pagination", label: "Pagination", subMenu: [], icon: "last_page", active: false },
              { href: "/speed-dial", label: "Speed Dial", subMenu: [], icon: "add-circle-outline", active: false },
              { href: "/tabs", label: "Tabs", subMenu: [], icon: "toolbar", active: false },
              { href: "/carousel", label: "Carousel", subMenu: [], icon: "carousel", active: false },
              { href: "/navbar", label: "Navbar", subMenu: [], icon: "side_navigation", active: false },
              { href: "/nav", label: "Nav", subMenu: [], icon: "link-outline", active: false },
          ], icon: 'golf-outline'
      },
      {
           href: "#", label: "Surfaces", subMenu: [
              { href: "/accordion", label: "Accordion", subMenu: [], icon: "list-outline", active: false },
              { href: "/card", label: "Card", subMenu: [], icon: "rectangle", active: false },
          ], icon: 'easel-outline'
      },
      {
           href: "#", label: "Utils", subMenu: [
              { href: "/shadows", label: "Shadows", subMenu: [], icon: "shadow", active: false },
              { href: "/timeline", label: "Timeline", subMenu: [], icon: "timeline-outline", active: false },
              { href: "/tree-view", label: "Tree view", subMenu: [], icon: "tree", active: false },
          ], icon: 'construct-outline'
      },
      {
           href: "#", label: "Table", subMenu: [
              { href: "/basic", label: "Basic", subMenu: [], icon: "simple-table", active: false },
              { href: "/sorting", label: "Sorting", subMenu: [], icon: "sort", active: false },
              { href: "/filtering", label: "Filtering", subMenu: [], icon: "filter-outline", active: false },
              { href: "/grouping", label: "Grouping", subMenu: [], icon: "group-table", active: false },
              { href: "/pagination", label: "Pagination", subMenu: [], icon: "last_page", active: false },
              { href: "/row-selection", label: "Row Selection", subMenu: [], icon: "table_rows", active: false },
              { href: "/expanding", label: "Expanding", subMenu: [], icon: "expand", active: false },
              { href: "/editable", label: "Editable", subMenu: [], icon: "edit", active: false },
              { href: "/drag-drop", label: "Drag & Drop", subMenu: [], icon: "expand-outline", active: false },
              { href: "/column-hiding", label: "Column Hiding", subMenu: [], icon: "eye-off-outline", active: false },
              { href: "/column-resizing", label: "Column Resizing", subMenu: [], icon: "resize", active: false },
              { href: "/sticky", label: "Sticky", subMenu: [], icon: "sticky_note", active: false },
              { href: "/umbrella", label: "Umbrella", subMenu: [], icon: "umbrella-outline", active: false },
              { href: "/empty", label: "Empty", subMenu: [], icon: "file-tray-outline", active: false },
          ], icon: 'table-outline'
      },
      {
           href: "#", label: "Layout", subMenu: [
              { href: "/basic", label: "Basic", subMenu: [], icon: "basic-layout", active: false },
              { href: "/multi-column", label: "Multi Column", subMenu: [], icon: "column", active: false },
              { href: "/action-bar", label: "Action Bar", subMenu: [], icon: "action-layout", active: false },
              { href: "/stick-bar", label: "Stick Bar", subMenu: [], icon: "flex_direction", active: false },
          ], icon: 'layout'
      },
      {
           href: "#", label: "Widgets", subMenu: [
              { href: "/statistics", label: "Statistics", subMenu: [], icon: "stats-chart-outline", active: false },
              { href: "/date", label: "Date", subMenu: [], icon: "today-outline", active: false },
              { href: "/chart", label: "Chart", subMenu: [], icon: "bar-chart-outline", active: false },
          ], icon: 'widgets'
      },
      {
           href: "#", label: "Plugins", subMenu: [
              { href: "/clipboard", label: "Clipboard", subMenu: [], icon: "clipboard-outline", active: false },
              { href: "/editor", label: "Editor", subMenu: [], icon: "wysiwyg", active: false },
              { href: "/drop-zone", label: "Drop-zone", subMenu: [], icon: "pinch_zoom_out", active: false },
              { href: "/map", label: "Map", subMenu: [], icon: "map-outline", active: false },
          ], icon: 'plugin'
      },
      {href: "/icons", label: "Icons", subMenu: [], icon: 'information-outline'},
      {
           href: "#", label: "Themes", subMenu: [
              { href: "/color", label: "Color", subMenu: [], icon: "color-palette-outline", active: false },
              { href: "/typography", label: "Typography", subMenu: [], icon: "match_case", active: false },
          ], icon: 'apps-outline'
      },
    ];
    const year = new Date();
    return (
    <div
      className="fixed overflow-y-auto scrollbar-none left-0 top-0 laptop:w-[275px] mobile:w-[80px] laptop:max-w-[275px] mobile:max-w-[80px] h-screen bg-appColor-3 pt-[112px] border-none drop-shadow-none">
      <div className="relative overflow-hidden border-none drop-shadow-none">
        <ul className="space-y-2 mobile:mx-3 laptop:mx-6">
        {
            navItems.map((item, index) => {
            return <Nav
                key={index}
                link={item.href}
                label={item.label}
                icon={item.icon} 
                subMenu={item.subMenu}
                />
            })
        }
        </ul>
      <footer className='mobile:hidden laptop:block absolute bottom-0 grid place-items-center text-center w-full p-1.5 mt-16 bg-appColor-1'>
          <span className="text-[0.65rem] font-light text-content-1">Information Network Security Administration &copy; { year.getFullYear() }</span>
      </footer>
      </div>
    </div>
  )
}

export default TopBar