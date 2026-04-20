# Research

## Overview

- In this page, I highlight my research on how machine learning and computational models enable understanding, mapping, and predicting cellular biology. The work is organized into four directions: **(1)** generative modeling of cellular responses to perturbations; **(2)** tissue architecture and ecosystem reprogramming with spatial genomics; **(3)** generative multimodal tissue foundation models; and **(4)** core machine learning methods for biomedical generative AI.
- Papers selected as cover:

<div style={{display:'flex', justifyContent: 'center', flexWrap: 'nowrap', gap: '10px', alignItems: 'flex-start', overflowX: 'auto'}}>
    <figure style={{margin: 0, flexShrink: 0, textAlign: 'center', minWidth: '228px'}}>
        <img src="/img/nature-biotech.jpeg" style={{margin: '10px', display: 'block', width: '228px', height: '300px', objectFit: 'contain'}} alt="Nature Biotechnology cover" />
        <figcaption><font size="1"><a href="https://www.nature.com/nbt/volumes/40/issues/1">Lotfollahi et al., Nature Biotechnology (2022)</a></font></figcaption>
    </figure>
    <figure style={{margin: 0, flexShrink: 0, textAlign: 'center', minWidth: '228px'}}>
        <img src="/img/morris-lab-cpa.jpg" style={{margin: '10px', display: 'block', width: '228px', height: '300px', objectFit: 'contain'}} alt="Molecular Systems Biology cover - CPA" />
        <figcaption><font size="1"><a href="https://www.embopress.org/toc/17444292/2023/19/6">Lotfollahi et al., Molecular Systems Biology (2023)</a></font></figcaption>
    </figure>
    <figure style={{margin: 0, flexShrink: 0, textAlign: 'center', minWidth: '228px'}}>
        <img src="/img/nature-genetics-cover.png" style={{margin: '10px', display: 'block', width: '228px', height: '300px', objectFit: 'contain'}} alt="Nature Genetics cover - NicheCompass" />
        <figcaption><font size="1"><a href="https://www.nature.com/articles/s41588-025-02120-6">Birk et al., Nature Genetics (2025)</a></font></figcaption>
    </figure>
</div>

- See a full list of papers on **[Google Scholar](https://scholar.google.com/citations?user=NXhouUcAAAAJ&hl=en)**.

## Generative modeling of cellular responses to perturbations

<div className="research-figure-wrap">
  <img src="/img/perturbation-manifold.png" alt="Conceptual landscape of cell state transitions in response to perturbations" />
</div>

We develop generative AI models that predict how cells change in response to perturbations—such as drugs, CRISPR knockouts, disease context, or other interventions—enabling counterfactual biology: given a cell measured in one condition, what would it look like under another? This research direction has evolved into a modeling framework (some call it virtual cell modeling) aimed at learning reusable representations of cell state and using them to predict cellular responses to perturbations, including out-of-distribution generalization to unseen perturbations and combinations. The long-term goal is to turn perturbational datasets into a predictive engine for hypothesis generation, mechanism discovery, and prioritization in large-scale screens.

<div className="research-section-clear" />

<div className="research-figure-wrap">
  <img src="/img/perturbation-impa.png" alt="IMPA prediction workflow: control cell, perturbation, and predicted phenotype" />
</div>

Across single-cell omics and high-content microscopy, we introduced a series of generative approaches that learn how perturbations transform cellular state and phenotype. Our early work [scGen](https://www.nature.com/articles/s41592-019-0494-8) models perturbation effects with simple latent-space arithmetic. We then developed [trVAE](https://academic.oup.com/bioinformatics/article/36/Supplement_2/i610/6055927), which reframes perturbation prediction as distribution matching—moving cells from a control distribution to a perturbed condition. Later, during my time at Facebook AI, we introduced the Compositional Perturbation Autoencoder ([CPA](https://www.embopress.org/doi/full/10.15252/msb.202211517)) to predict combinatorial perturbations such as drug combinations or double CRISPR knockouts, and extended it to handle unseen drugs ([chemCPA](https://proceedings.neurips.cc/paper_files/paper/2022/hash/aa933b5abc1be30baece1d230ec575a7-Abstract-Conference.html)). In parallel, we developed [IMPA](https://www.nature.com/articles/s41467-024-55707-8) (Image Perturbation Autoencoder) to predict perturbation-induced morphological responses in high-content microscopy using untreated cells as input, addressing the challenge that only a small fraction of perturbations show measurable activity in experimental screens. More recently, we introduced [CellDISECT](https://www.biorxiv.org/content/10.1101/2025.06.03.657578v1), where we introduce multiple counterfactuals for disentangling covariates and predicting cellular responses.

<div className="research-section-clear" />

**Selected papers:**

- **scGen** — Nature Methods (2019) — [[paper]](https://doi.org/10.1038/s41592-019-0494-8), [[code]](https://github.com/theislab/scgen), [[press]](https://www.bioengineering.tum.de/en/news/details/ai-extrapolates-from-mice-to-humans-1)
- **trVAE** — Bioinformatics (2020) — [[paper]](https://doi.org/10.1093/bioinformatics/btaa800), [[code]](https://github.com/theislab/trvae), [[talk]](https://eccb2020.info/)
- **CPA** — Molecular Systems Biology (2023) — [[paper]](https://www.embopress.org/doi/full/10.15252/msb.202211517), [[code]](https://github.com/facebookresearch/CPA), [[blogpost]](https://ai.facebook.com/blog/ai-predicts-effective-drug-combinations-to-fight-complex-diseases-faster)
- **chemCPA** — NeurIPS (2022) — [[paper]](https://proceedings.neurips.cc/paper_files/paper/2022/hash/aa933b5abc1be30baece1d230ec575a7-Abstract-Conference.html), [[code]](https://github.com/theislab/chemcpa)
- **IMPA** — Nature Communications (2025) — [[paper]](https://www.nature.com/articles/s41467-024-55707-8), [[code]](https://github.com/theislab/impa)
- **CellDISECT** — bioRxiv (2025) — [[paper]](https://www.biorxiv.org/content/10.1101/2025.06.03.657578v1), [[code]](https://github.com/lotfollahi-lab/CellDISECT)


## Tissue architecture and ecosystem reprogramming with spatial genomics

![NicheCompass and MintFlow: tissue niches, microenvironments, and in silico perturbations](/img/tissue-spatial-combined.png)

Spatial genomics makes it possible to study tissue organization at cellular resolution, but two fundamental challenges remain. First, can we identify tissue microenvironments (niches) and quantitatively define what makes them distinct—based on the cellular pathways and communication programs that structure them? Second, can we move beyond description and simulate perturbations of tissue microenvironments to predict how local ecosystems and cellular states reprogram in response to interventions?

To address the first challenge, we developed [NicheCompass](https://www.nature.com/articles/s41588-025-02120-6), a pathway-informed graph deep learning framework grounded in principles of cellular communication. NicheCompass learns interpretable representations that capture signaling and interaction programs, enabling robust niche discovery and quantitative characterization across spatial samples and disease contexts.

To address the second challenge, we developed [MintFlow](https://github.com/Lotfollahi-lab/mintflow), a generative AI approach that learns how local tissue microenvironments imprint and reprogram cellular state, and enables *in silico* tissue perturbations—for example, depleting or replacing specific cell populations and predicting resulting responses at micro- and macro-scales. MintFlow shifts spatial analysis from descriptive mapping toward predictive simulation of tissue ecosystem reprogramming, supporting unbiased mechanism discovery and translational hypothesis generation across human disease settings.

**Selected papers:**

- **NicheCompass** — Nature Genetics (2025) — [[paper]](https://www.nature.com/articles/s41588-025-02120-6), [[code]](https://github.com/Lotfollahi-lab/nichecompass)
- **MintFlow** — bioRxiv (2025) — [[paper]](https://doi.org/10.1101/2025.06.24.661094), [[code]](https://github.com/Lotfollahi-lab/mintflow)

## Generative Multimodal Tissue Foundation Models

![Generative Multimodal Tissue Foundation Models: data collection, SIGMMA alignment, and HoloTea 3D generation](/img/tissue-foundation-models.png)

Our lab generates massive, patient-linked multimodal tissue datasets collected across hospitals in the UK and internationally—combining H&E whole-slide imaging, spatial transcriptomics, transcriptomics, proteomics, and DNA sequence. Our research direction is to build generative multimodal foundation models that link these modalities and enable counterfactual tissue biology: given a tissue sample measured in one modality or context, generate what it would look like in another modality (with uncertainty), while preserving spatial organization, tissue architecture, and cell–cell interactions. A central objective is "cheap → expensive" generation, e.g., predicting spatial transcriptomics from routine histology, and ultimately learning patient-level tissue representations that generalize across sites, protocols, and cohorts.

Building on [HoloTea](https://arxiv.org/abs/2511.14613), we move beyond 2D slice prediction to 3D virtual tissues by generating spot-level gene expression from H&E using a 3D-aware flow-matching framework that leverages adjacent sections for volumetric continuity and incorporates biologically appropriate priors for count data.

We then extend this into robust, reusable representations with [SIGMMA](https://arxiv.org/abs/2511.15464), which learns hierarchical multi-scale aligned embeddings of H&E and spatial transcriptomics, representing spatial expression as a cell graph to preserve tissue topology and interactions across micro/meso/macro scales.

Together, these advances define a roadmap toward tissue foundation models that can generate missing modalities, assemble coherent 3D molecular anatomy, and enable scalable biomarker discovery and mechanistic hypothesis generation in real-world clinical tissue data.

**Selected papers:**

- **HoloTea** — arXiv (2025) — [[paper]](https://arxiv.org/abs/2511.14613)
- **SIGMMA** — arXiv (2025) — [[paper]](https://arxiv.org/abs/2511.15464)

## Core Machine Learning Research

![DirMoE: Dirichlet-routed Mixture of Experts (top). SP-FM: Shortest-Path Flow Matching with mixture-conditioned bases (bottom).](/img/core-ml-research.png)

To answer hard biological and clinical questions with generative AI, we can't simply port existing architectures from vision or language. Biomedical data is heterogeneous, noisy, missing by design, and heavily shifted across cohorts—so we often need new architectures, new probabilistic/mathematical modeling choices, and new training objectives to make generative models scalable, stable, and scientifically meaningful. This is a core direction of our lab: we develop foundational ML methods for generative modeling that later power our multimodal tissue and patient models.

Two recent mixture-focused examples (ICLR 2026) illustrate this philosophy. [DirMoE](https://openreview.net/forum?id=a15cDnzr6r) introduces a fully differentiable Mixture-of-Experts router that disentangles which experts activate (Bernoulli "spike") from how probability mass is allocated among them (Dirichlet "slab"), enabling end-to-end training with interpretable control over sparsity and specialization.

In a complementary direction, [Shortest-Path Flow Matching (SP-FM)](https://arxiv.org/abs/2601.11827) improves conditional generative modeling by conditioning both the base distribution (as a Gaussian mixture) and the velocity field on the condition, effectively choosing a base that shortens the path to the target distribution and strengthening extrapolation to unseen conditions.

**Selected papers:**

- **DirMoE** — ICLR (2026) — [[paper]](https://openreview.net/forum?id=a15cDnzr6r)
- **SP-FM** — arXiv (2026) — [[paper]](https://arxiv.org/abs/2601.11827)

## Machine learning to build single-cell atlases

![Alt text](../img/ref.png?raw=true "Title")

Our lab has pioneered machine learning methods that make single-cell atlases reusable, extendable references—so new datasets can be mapped, annotated, and compared in a shared coordinate system rather than re-integrated from scratch.

We introduced [scArches](https://www.nature.com/articles/s41587-021-01001-7) for reference mapping by transfer learning, enabling query datasets to be mapped into a pretrained atlas without retraining the reference. We extended this to evolving cell identity structure with [treeArches](https://www.biorxiv.org/content/10.1101/2022.07.07.499109v2) (updating cell-type hierarchies). We expanded atlas building beyond RNA with multimodal generative models: [Multigrate](https://www.biorxiv.org/content/10.1101/2022.03.16.484643v1) integrates partially overlapping modalities (RNA/ATAC/protein) into unified multimodal references, and [mvTCR](https://www.biorxiv.org/content/10.1101/2021.06.24.449733v2) integrates TCR sequences + scRNA-seq for immune atlases. To improve biological meaning and scale, we developed [expiMap](https://www.nature.com/articles/s41556-022-01072-x) for interpretable gene-program embeddings and [scPoli](https://www.nature.com/articles/s41592-023-02035-2) for population-level references that learn sample- and cell-level structure and provide uncertainty-aware annotation of new data.

**Community impact (examples)**

The community has extensively leveraged these approaches. Here are examples that our lab contributed to, showcased in building the first integrated reference atlas for [lung](https://www.nature.com/articles/s41591-023-02327-2), and more recently integrated spatial atlases for [fibroblasts](https://www.nature.com/articles/s41590-025-02267-8) and [skin](https://www.biorxiv.org/content/10.1101/2024.12.23.629194v1.abstract).