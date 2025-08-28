export class AccordionManager {
  handleAccordionClick(event) {
    const clickedDetails = event.target.closest('details');

    if (!clickedDetails) return;

    this.closeOtherAccordions(clickedDetails);
  }

  closeOtherAccordions(currentDetails) {
    document.querySelectorAll('details').forEach((details) => {
      if (details !== currentDetails && details.open) {
        details.removeAttribute('open');
      }
    });
  }
}
