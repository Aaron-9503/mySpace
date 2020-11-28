const steps = [
  {
    element: '#step1',
    popover: {
      title: '数据统计',
      description: '点击这里收起数据统计面板',
      showButtons:true,     // Text on the close button for this step
      nextBtnText: 'Next',        // Next button text for this step
      // prevBtnText: 'Previous',
    }
  },
  {
    element: '#step2',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'bottom'
    }
  }
]

export default steps
